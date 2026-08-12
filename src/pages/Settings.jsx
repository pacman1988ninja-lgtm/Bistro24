import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { getSyncConfig, saveSyncConfig, clearSyncConfig, syncNow, subscribeStatus } from '../githubSync';
import { ArrowLeft, LogOut, BookOpen, Cloud, CloudOff, RefreshCw } from 'lucide-react';
import ExportExcel from '../components/ExportExcel';

export default function Settings({ user }) {
  const navigate = useNavigate();
  const [syncCfg, setSyncCfg] = useState(null);
  const [syncStatus, setSyncStatus] = useState({ state: 'off', lastSync: null, error: null });
  const [token, setToken] = useState('');
  const [owner, setOwner] = useState('pacman1988ninja-lgtm');
  const [repo, setRepo] = useState('Bistro24');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setSyncCfg(getSyncConfig());
    const unsub = subscribeStatus(setSyncStatus);
    return unsub;
  }, []);

  const handleLogout = () => {
    store.logout();
    window.location.reload();
  };

  const handleSaveSync = async () => {
    if (!token.trim()) return alert('Введите токен GitHub');
    setBusy(true);
    saveSyncConfig({ token, owner, repo });
    setSyncCfg(getSyncConfig());
    setToken('');
    const ok = await syncNow();
    setBusy(false);
    if (ok) alert('Синхронизация настроена и выполнена');
  };

  const handleSyncNow = async () => {
    setBusy(true);
    await syncNow();
    setBusy(false);
  };

  const handleDisableSync = () => {
    if (!confirm('Отключить синхронизацию с GitHub? Данные останутся на этом устройстве и в репозитории, но перестанут обновляться.')) return;
    clearSyncConfig();
    setSyncCfg(null);
  };

  const isManager = user.role === 'owner' || user.role === 'manager';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Настройки</h1>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700 }}>
            {user.fullName.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>{user.fullName}</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{user.email}</div>
            <span className={`role-badge role-${user.role}`}>{user.role}</span>
          </div>
        </div>
      </div>

      {isManager && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {syncCfg ? <Cloud size={18} /> : <CloudOff size={18} />} Синхронизация с GitHub
          </div>

          {syncCfg ? (
            <div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
                Репозиторий: {syncCfg.owner}/{syncCfg.repo}, ветка «{syncCfg.branch}»
              </div>
              <div style={{ fontSize: 13, marginBottom: 12 }}>
                {syncStatus.state === 'syncing' && <span style={{ color: 'var(--warning)' }}>Синхронизация…</span>}
                {syncStatus.state === 'ok' && syncStatus.lastSync && (
                  <span style={{ color: 'var(--success)' }}>Синхронизировано: {new Date(syncStatus.lastSync).toLocaleString('ru-RU')}</span>
                )}
                {syncStatus.state === 'error' && <span style={{ color: 'var(--danger)' }}>Ошибка: {syncStatus.error}</span>}
                {(syncStatus.state === 'idle' || syncStatus.state === 'off') && <span style={{ color: 'var(--text-secondary)' }}>Ожидание изменений</span>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-secondary" onClick={handleSyncNow} disabled={busy} style={{ flex: 1, padding: 10, fontSize: 13 }}>
                  <RefreshCw size={14} /> Синхронизировать
                </button>
                <button className="btn btn-danger" onClick={handleDisableSync} style={{ flex: 1, padding: 10, fontSize: 13 }}>
                  Отключить
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12 }}>
                Данные (смены, операции, сотрудники, справочники) будут сохраняться в файл JSON в репозитории и синхронизироваться между устройствами. Фото остаются на устройстве.
              </p>
              <div className="form-group">
                <label className="form-label">Токен GitHub (PAT, права contents: read/write)</label>
                <input type="password" className="form-input" value={token} onChange={e => setToken(e.target.value)} placeholder="github_pat_…" />
              </div>
              <div className="form-group">
                <label className="form-label">Владелец / репозиторий</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input type="text" className="form-input" value={owner} onChange={e => setOwner(e.target.value)} style={{ flex: 1 }} />
                  <input type="text" className="form-input" value={repo} onChange={e => setRepo(e.target.value)} style={{ flex: 1 }} />
                </div>
              </div>
              <p style={{ fontSize: 12, color: 'var(--warning)', marginBottom: 12 }}>
                ⚠ Если репозиторий публичный — данные файла (включая PIN-коды) будут доступны всем. Рекомендуется приватный репозиторий.
              </p>
              <button className="btn btn-primary" onClick={handleSaveSync} disabled={busy} style={{ padding: 10, fontSize: 13 }}>
                <Cloud size={14} /> Включить синхронизацию
              </button>
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <ExportExcel />
        {isManager && (
          <button className="btn btn-secondary" onClick={() => navigate('/departments')}>
            <BookOpen size={18} /> Справочники
          </button>
        )}
        <button className="btn btn-danger" onClick={handleLogout} style={{ marginTop: 20 }}>
          <LogOut size={18} /> Выйти
        </button>
      </div>

      <div style={{ marginTop: 24, padding: 12, background: 'var(--surface)', borderRadius: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Бистро24 v2.0</div>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>
          {syncCfg ? 'Данные: локально + GitHub' : 'Данные хранятся локально'}
        </div>
      </div>
    </div>
  );
}
