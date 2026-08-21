// githubSync.js — синхронизация данных IndexedDB с репозиторием GitHub.
// Данные хранятся одним JSON-файлом в отдельной ветке (по умолчанию `data`),
// чтобы не засорять историю main. Фото НЕ синхронизируются (остаются на устройстве).
//
// Модель синхронизации: snapshot + мерж по записям.
// - Каждая запись имеет метку изменения __ut (ms). Побеждает новейшая (LWW).
// - Удаления передаются через tombstones: { "shifts:id": timestamp }.
// - Конфликт записи на GitHub (409) решается повторным мержем и ретраем.
// - Если одна и та же запись изменена и локально, и удалённо по-разному —
//   помимо автоматического LWW-выбора, обе версии сохраняются в стор
//   `conflicts` для ручного разбора владельцем/менеджером (см. getConflicts/resolveConflict).

import { _raw, setChangeListener } from './store.js';

const CFG_KEY = 'bistro24_sync_cfg';

const DEFAULT_CFG = {
  owner: 'pacman1988ninja-lgtm',
  repo: 'Bistro24',
  branch: 'data',
  path: 'bistro24-data.json',
};

const SYNCED_COLLECTIONS = ['shifts', 'operations', 'users', 'payrollPayments'];

let cfg = null;
let syncing = false;
let pushTimer = null;
let intervalId = null;
let status = { state: 'off', lastSync: null, error: null };
const listeners = new Set();
const conflictListeners = new Set();

function setStatus(patch) {
  status = { ...status, ...patch };
  listeners.forEach(fn => { try { fn(status); } catch { /* ignore */ } });
}

export function subscribeStatus(fn) {
  listeners.add(fn);
  fn(status);
  return () => listeners.delete(fn);
}

export function subscribeConflicts(fn) {
  conflictListeners.add(fn);
  getConflicts().then(fn);
  return () => conflictListeners.delete(fn);
}

async function notifyConflicts() {
  const list = await getConflicts();
  conflictListeners.forEach(fn => { try { fn(list); } catch { /* ignore */ } });
}

export function getSyncConfig() {
  if (!cfg) {
    try {
      const raw = localStorage.getItem(CFG_KEY);
      cfg = raw ? JSON.parse(raw) : null;
    } catch {
      cfg = null;
    }
  }
  return cfg ? { ...cfg, token: cfg.token ? '•••' : '' } : null;
}

function loadRawConfig() {
  try {
    const raw = localStorage.getItem(CFG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function checkTokenFormat(token) {
  const t = (token || '').trim();
  if (!t) return null;
  if (t.startsWith('github_pat_')) return null;
  if (t.startsWith('ghp_') || t.startsWith('gho_') || t.startsWith('ghu_') || t.startsWith('ghs_')) {
    return 'Похоже на classic-токен GitHub — он даёт доступ ко всему аккаунту. Рекомендуется создать fine-grained PAT с доступом только к этому репозиторию (Settings → Developer settings → Fine-grained tokens).';
  }
  return null;
}

export function saveSyncConfig({ token, owner, repo, branch, path }) {
  cfg = {
    owner: (owner || DEFAULT_CFG.owner).trim(),
    repo: (repo || DEFAULT_CFG.repo).trim(),
    branch: (branch || DEFAULT_CFG.branch).trim(),
    path: (path || DEFAULT_CFG.path).trim(),
    token: token.trim(),
  };
  localStorage.setItem(CFG_KEY, JSON.stringify(cfg));
  setStatus({ state: 'idle', error: null });
  setupSyncTimers();
}

export function clearSyncConfig() {
  cfg = null;
  localStorage.removeItem(CFG_KEY);
  if (pushTimer) clearTimeout(pushTimer);
  setStatus({ state: 'off', error: null });
}

async function ghFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${cfg.token}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });
  if (res.status === 404) {
    const err = new Error('not_found');
    err.status = 404;
    throw err;
  }
  if (res.status === 409) {
    const err = new Error('conflict');
    err.status = 409;
    throw err;
  }
  if (res.status === 401 || res.status === 403) {
    const err = new Error('Нет доступа к репозиторию. Проверьте токен (нужны права contents: read/write).');
    err.status = res.status;
    throw err;
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`GitHub API: ${res.status} ${text.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

function repoBase() {
  return `https://api.github.com/repos/${cfg.owner}/${cfg.repo}`;
}

function b64ToString(b64) {
  const bin = atob(b64.replace(/\n/g, ''));
  const bytes = Uint8Array.from(bin, ch => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function stringToB64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  const chunk = 8192;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(bin);
}

async function ghGetDataFile() {
  try {
    const res = await ghFetch(`${repoBase()}/contents/${cfg.path}?ref=${encodeURIComponent(cfg.branch)}`);
    return { sha: res.sha, json: JSON.parse(b64ToString(res.content)) };
  } catch (e) {
    if (e.status === 404) return null;
    throw e;
  }
}

async function ghPutDataFile(snapshot, sha) {
  const body = {
    message: `data: sync ${new Date().toISOString()}`,
    content: stringToB64(JSON.stringify(snapshot)),
    branch: cfg.branch,
  };
  if (sha) body.sha = sha;
  return ghFetch(`${repoBase()}/contents/${cfg.path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function ensureBranch() {
  try {
    await ghFetch(`${repoBase()}/git/ref/heads/${encodeURIComponent(cfg.branch)}`);
  } catch (e) {
    if (e.status !== 404) throw e;
    const mainRef = await ghFetch(`${repoBase()}/git/ref/heads/main`);
    await ghFetch(`${repoBase()}/git/refs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref: `refs/heads/${cfg.branch}`, sha: mainRef.object.sha }),
    });
  }
}

async function exportSnapshot() {
  const [shifts, operations, users, payrollPayments, refsDoc, audit, tombstones] = await Promise.all([
    _raw.getAll('shifts'),
    _raw.getAll('operations'),
    _raw.getAll('users'),
    _raw.getAll('payrollPayments'),
    _raw.get('references', 'main'),
    _raw.getAll('audit'),
    _raw.getTombstones(),
  ]);
  return {
    app: 'bistro24',
    v: 2,
    exportedAt: new Date().toISOString(),
    shifts,
    operations,
    users,
    payrollPayments,
    references: refsDoc || null,
    audit,
    tombstones,
  };
}

function contentEqual(a, b) {
  if (!a || !b) return false;
  const strip = (o) => { const { __ut, ...rest } = o; return rest; };
  return JSON.stringify(strip(a)) === JSON.stringify(strip(b));
}

async function recordConflict(collection, id, local, remote) {
  const existing = await _raw.getRaw('conflicts');
  const dup = existing?.find(c => c.collection === collection && c.recordId === id && !c.resolved);
  if (dup) {
    dup.local = local;
    dup.remote = remote;
    dup.detectedAt = Date.now();
    await _raw.putRaw('conflicts', dup);
    return;
  }
  const conflict = {
    id: `${collection}:${id}:${Date.now()}`,
    collection,
    recordId: id,
    local,
    remote,
    detectedAt: Date.now(),
    resolved: false,
  };
  await _raw.putRaw('conflicts', conflict);
}

async function mergeSnapshot(remote) {
  if (!remote || typeof remote !== 'object') return;

  const localTomb = await _raw.getTombstones();
  const mergedTomb = { ...localTomb };
  for (const [k, v] of Object.entries(remote.tombstones || {})) {
    mergedTomb[k] = Math.max(mergedTomb[k] || 0, v);
  }

  for (const collName of SYNCED_COLLECTIONS) {
    const remoteRecs = Array.isArray(remote[collName]) ? remote[collName] : [];
    const localRecs = await _raw.getAll(collName);
    const localMap = new Map(localRecs.map(r => [r.id, r]));
    const remoteMap = new Map(remoteRecs.map(r => [r.id, r]));
    const ids = new Set([...localMap.keys(), ...remoteMap.keys()]);

    for (const id of ids) {
      const l = localMap.get(id);
      const r = remoteMap.get(id);
      const lut = l?.__ut || 0;
      const rut = r?.__ut || 0;
      const t = mergedTomb[`${collName}:${id}`] || 0;

      if (t && t >= Math.max(lut, rut)) {
        if (l) await _raw.deleteRaw(collName, id);
        continue;
      }

      if (l && r && !contentEqual(l, r)) {
        await recordConflict(collName, id, l, r);
      }

      const winner = !l ? r : !r ? l : (rut > lut ? r : l);
      if (winner && winner !== l) await _raw.putRaw(collName, winner);
    }
  }

  const rdoc = remote.references;
  const ldoc = await _raw.get('references', 'main');
  const refTomb = mergedTomb['references:main'] || 0;
  if (!(refTomb && refTomb >= Math.max(ldoc?.__ut || 0, rdoc?.__ut || 0))) {
    if (rdoc && ldoc && !contentEqual(rdoc, ldoc) && (rdoc.__ut || 0) !== (ldoc.__ut || 0)) {
      if ((rdoc.__ut || 0) > (ldoc.__ut || 0)) {
        await recordConflict('references', 'main', ldoc, rdoc);
      }
    }
    if (rdoc && (rdoc.__ut || 0) > (ldoc?.__ut || 0)) {
      await _raw.putRaw('references', rdoc);
    }
  }

  const localAudit = await _raw.getAll('audit');
  const known = new Set(localAudit.map(a => a.id));
  for (const a of remote.audit || []) {
    if (a && a.id && !known.has(a.id)) await _raw.putRaw('audit', a);
  }

  await _raw.putRaw('meta', { key: 'tombstones', map: mergedTomb });
  await notifyConflicts();
}

export async function getConflicts() {
  const all = await _raw.getAll('conflicts');
  return all.filter(c => !c.resolved).sort((a, b) => b.detectedAt - a.detectedAt);
}

export async function resolveConflict(conflictId, keep) {
  const all = await _raw.getAll('conflicts');
  const c = all.find(x => x.id === conflictId);
  if (!c) return false;
  const chosen = keep === 'remote' ? c.remote : c.local;
  if (chosen) {
    const { __ut, ...rest } = chosen;
    await _raw.putRaw(c.collection, { ...rest, __ut: Date.now() });
  }
  c.resolved = true;
  await _raw.putRaw('conflicts', c);
  await notifyConflicts();
  schedulePush();
  return true;
}

export async function syncNow() {
  if (!cfg?.token) return false;
  if (syncing) return false;
  if (!navigator.onLine) {
    setStatus({ state: 'error', error: 'Нет сети. Данные сохранены локально, синхронизация выполнится позже.' });
    return false;
  }
  syncing = true;
  setStatus({ state: 'syncing', error: null });
  try {
    await ensureBranch();
    for (let attempt = 0; attempt < 3; attempt++) {
      const remote = await ghGetDataFile();
      if (remote?.json) await mergeSnapshot(remote.json);
      const snapshot = await exportSnapshot();
      try {
        await ghPutDataFile(snapshot, remote?.sha);
        setStatus({ state: 'ok', lastSync: Date.now(), error: null });
        return true;
      } catch (e) {
        if (e.status === 409 && attempt < 2) continue;
        throw e;
      }
    }
    return false;
  } catch (e) {
    setStatus({ state: 'error', error: e.message || String(e) });
    return false;
  } finally {
    syncing = false;
  }
}

export function schedulePush() {
  if (!cfg?.token) return;
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => { syncNow(); }, 8000);
}

export function initSync() {
  cfg = loadRawConfig();
  setChangeListener(schedulePush);
  if (cfg?.token) setupSyncTimers();
}

function setupSyncTimers() {
  if (!cfg?.token) return;
  setStatus({ state: 'idle' });
  syncNow();
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (cfg?.token && navigator.onLine && !document.hidden) syncNow();
  }, 120000);
  window.addEventListener('online', () => { if (cfg?.token) syncNow(); });
}
