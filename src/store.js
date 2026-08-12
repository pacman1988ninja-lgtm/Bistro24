const DB_NAME = 'Bistro24DB';
const DB_VERSION = 4;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('shifts')) db.createObjectStore('shifts', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('operations')) db.createObjectStore('operations', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('photos')) db.createObjectStore('photos', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('users')) db.createObjectStore('users', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('references')) db.createObjectStore('references', { keyPath: 'key' });
      if (!db.objectStoreNames.contains('audit')) db.createObjectStore('audit', { keyPath: 'id', autoIncrement: true });
    };
  });
}

async function dbGet(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbGetAll(store) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbPut(store, data) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(data);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(store, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function generateId() {
  return 'id_' + Math.random().toString(36).slice(2, 9) + '_' + Date.now();
}

function toNum(value, fallback = 0) {
  if (value === null || value === undefined) return fallback;
  const str = String(value).replace(',', '.').trim();
  if (str === '') return fallback;
  const n = Number(str);
  return Number.isFinite(n) ? n : fallback;
}

function nowISO() {
  return new Date().toISOString();
}

const DEFAULT_USERS = [
  { id: 'u1', email: 'seller@bistro24.ru', fullName: 'Петрова М.С.', role: 'seller', pin: '1111', active: true },
  { id: 'u2', email: 'manager@bistro24.ru', fullName: 'Иванов А.П.', role: 'manager', pin: '2222', active: true },
  { id: 'u3', email: 'owner@bistro24.ru', fullName: 'Владелец', role: 'owner', pin: '3333', active: true },
];

const DEFAULT_REFS = {
  expenseTypes: [
    { id: 'et1', name: 'Контрагент', active: true, linkedRef: 'counterparties' },
    { id: 'et2', name: 'Заработная плата', active: true, linkedRef: 'employees' },
    { id: 'et3', name: 'Подрядчик', active: true, linkedRef: 'contractors' },
    { id: 'et4', name: 'Хоз. нужды', active: true },
    { id: 'et5', name: 'Прочие выплаты', active: true },
    { id: 'et6', name: 'Инкассация выручки', active: true, linkedRef: 'employees', filterRoles: ['owner', 'manager'] },
  ],
  paymentForms: [
    { id: 'pf1', name: 'Наличные', active: true },
    { id: 'pf2', name: 'Безналичные', active: true },
    { id: 'pf3', name: 'Перевод СБП', active: true },
  ],
  contractors: [
    { id: 'c1', name: 'ООО «Продукты»', active: true },
    { id: 'c2', name: 'ИП Сидоров', active: true },
  ],
  counterparties: [
    { id: 'cnt1', name: 'Поставщик №1', active: true },
    { id: 'cnt2', name: 'Арендодатель', active: true },
  ],
  employees: [
    { id: 'u1', name: 'Петрова М.С.', active: true, role: 'seller' },
    { id: 'u2', name: 'Иванов А.П.', active: true, role: 'manager' },
    { id: 'u3', name: 'Владелец', active: true, role: 'owner' },
  ],
  shiftTypes: [
    { id: 'st1', name: 'Сутки', active: true },
    { id: 'st2', name: 'День', active: true },
    { id: 'st3', name: 'Ночь', active: true },
    { id: 'st4', name: 'Управляющий', active: true },
  ],
};

async function initDefaults() {
  const existing = await dbGetAll('users');
  if (existing.length === 0) {
    for (const u of DEFAULT_USERS) await dbPut('users', u);
  }
  const refs = await dbGet('references', 'main');
  if (!refs) {
    await dbPut('references', { key: 'main', data: DEFAULT_REFS });
  } else {
    // Миграция: добавить shiftTypes если отсутствуют
    const data = refs.data;
    let changed = false;
    if (!data.shiftTypes || data.shiftTypes.length === 0) {
      data.shiftTypes = DEFAULT_REFS.shiftTypes;
      changed = true;
    }
    // Миграция: проставить linkedRef для статей расходов по названию
    const linkMap = {
      'Контрагент': 'counterparties',
      'Заработная плата': 'employees',
      'Подрядчик': 'contractors',
      'Инкассация выручки': 'employees',
    };
    if (data.expenseTypes) {
      data.expenseTypes = data.expenseTypes.map(et => {
        if (!et.linkedRef && linkMap[et.name]) {
          changed = true;
          const upd = { ...et, linkedRef: linkMap[et.name] };
          if (et.name === 'Инкассация выручки') upd.filterRoles = ['owner', 'manager'];
          return upd;
        }
        return et;
      });
    }
    // Миграция: проставить shiftTypes для сотрудников по роли
    let empChanged = false;
    if (data.employees) {
      const stAll = (data.shiftTypes || []).filter(t => t.active).map(t => t.id);
      const stSeller = (data.shiftTypes || []).filter(t => t.name !== 'Управляющий' && t.active).map(t => t.id);
      const stManager = (data.shiftTypes || []).filter(t => t.name === 'Управляющий' && t.active).map(t => t.id);
      data.employees = data.employees.map(emp => {
        if (!emp.shiftTypes || emp.shiftTypes.length === 0) {
          empChanged = true;
          if (emp.role === 'seller') return { ...emp, shiftTypes: stSeller };
          if (emp.role === 'manager') return { ...emp, shiftTypes: stManager };
          if (emp.role === 'owner') return { ...emp, shiftTypes: stAll };
        }
        return emp;
      });
    }
    if (changed || empChanged) {
      await dbPut('references', { key: 'main', data });
    }
  }
}

// Audit log
async function logAudit(userId, action, entityType, entityId, details = {}) {
  const entry = {
    id: generateId(),
    timestamp: nowISO(),
    userId,
    action,
    entityType,
    entityId,
    details,
  };
  await dbPut('audit', entry);
}

async function getAudit(entityType, entityId) {
  const all = await dbGetAll('audit');
  return all
    .filter(a => (!entityType || a.entityType === entityType) && (!entityId || a.entityId === entityId))
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

export const store = {
  async init() {
    await initDefaults();
  },

  // Auth
  async loginByPin(pin) {
    const users = await dbGetAll('users');
    const user = users.find((u) => u.pin === pin && u.active);
    if (user) {
      localStorage.setItem('bistro24_session', JSON.stringify({ userId: user.id, ts: Date.now() }));
      return user;
    }
    return null;
  },

  async loginByEmail(email) {
    const users = await dbGetAll('users');
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.active);
    if (user) {
      localStorage.setItem('bistro24_session', JSON.stringify({ userId: user.id, ts: Date.now() }));
      return user;
    }
    return null;
  },

  getSession() {
    const raw = localStorage.getItem('bistro24_session');
    if (!raw) return null;
    try {
      const s = JSON.parse(raw);
      if (Date.now() - s.ts > 86400000 * 7) {
        localStorage.removeItem('bistro24_session');
        return null;
      }
      return s;
    } catch {
      return null;
    }
  },

  async getCurrentUser() {
    const s = this.getSession();
    if (!s) return null;
    const user = await dbGet('users', s.userId);
    if (!user || !user.active) {
      localStorage.removeItem('bistro24_session');
      return null;
    }
    return user;
  },

  logout() {
    localStorage.removeItem('bistro24_session');
  },

  // Users
  async getUsers() {
    return dbGetAll('users');
  },

  async addUser(user) {
    user.id = generateId();
    user.active = true;
    await dbPut('users', user);
    return user;
  },

  async updateUser(user) {
    await dbPut('users', user);
    return user;
  },

  // References
  async getReferences() {
    const refs = await dbGet('references', 'main');
    return refs ? refs.data : DEFAULT_REFS;
  },

  async syncEmployees(employees) {
    const users = await dbGetAll('users');
    for (const emp of employees.filter(e => e.active)) {
      const existing = users.find(u => u.id === emp.id);
      if (existing) {
        existing.fullName = emp.name;
        existing.role = emp.role;
        if (emp.pin) existing.pin = emp.pin;
        await dbPut('users', existing);
      } else {
        await dbPut('users', {
          id: emp.id,
          email: '',
          fullName: emp.name,
          role: emp.role,
          pin: emp.pin || '0000',
          active: true,
        });
      }
    }
    for (const u of users) {
      if (u.role === 'owner') continue;
      const emp = employees.find(e => e.id === u.id);
      if (!emp || !emp.active) {
        u.active = false;
        await dbPut('users', u);
      }
    }
  },

  async saveReferences(data) {
    await dbPut('references', { key: 'main', data });
  },

  // Shifts
  async getShifts() {
    return dbGetAll('shifts');
  },

  async recalcShift(shiftId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    const ops = await dbGetAll('operations');
    const shiftOps = ops.filter(o => o.shiftId === shiftId);
    shift.deposit = shiftOps.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
    shift.expense = shiftOps.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
    if (shift.status === 'Закрыта') {
      shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    }
    await dbPut('shifts', shift);
    return shift;
  },

  async recalcChain(fromShiftId) {
    const allShifts = await dbGetAll('shifts');
    const sorted = allShifts.sort((a, b) => new Date(a.openDate) - new Date(b.openDate));
    const fromIndex = sorted.findIndex(s => s.id === fromShiftId);
    if (fromIndex === -1) return;

    for (let i = fromIndex; i < sorted.length; i++) {
      const shift = sorted[i];
      const ops = await dbGetAll('operations');
      const shiftOps = ops.filter(o => o.shiftId === shift.id);
      shift.deposit = shiftOps.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
      shift.expense = shiftOps.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
      if (shift.status === 'Закрыта') {
        shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
      }
      await dbPut('shifts', shift);

      // Передать остаток следующей смене
      if (i + 1 < sorted.length) {
        sorted[i + 1].startBalance = shift.endBalance;
      }
    }
  },

  async getShift(id) {
    return dbGet('shifts', id);
  },

  async getOpenShift() {
    const shifts = await dbGetAll('shifts');
    return shifts.find((s) => s.status === 'Открыта');
  },

  async getOpenShiftByUser(userId) {
    const shifts = await dbGetAll('shifts');
    return shifts.find((s) => s.status === 'Открыта' && s.employeeIds?.includes(userId));
  },

  async createShift(employeeId, shiftTypeId) {
    const shifts = await dbGetAll('shifts');
    const maxNumber = shifts.reduce((max, s) => Math.max(max, s.shiftNumber || 0), 0);
    const shiftNumber = maxNumber + 1;

    const closed = shifts
      .filter((s) => s.status === 'Закрыта')
      .sort((a, b) => new Date(b.closeDate || b.openDate) - new Date(a.closeDate || a.openDate));

    const startBalance = closed.length > 0 ? closed[0].endBalance : 0;

    const shift = {
      id: generateId(),
      shiftNumber,
      openDate: nowISO(),
      employeeIds: [employeeId],
      startBalance,
      revenue: 0,
      cash: 0,
      cashless: 0,
      deposit: 0,
      expense: 0,
      endBalance: startBalance,
      status: 'Открыта',
      closeDate: null,
      comment: '',
      editDeadline: null,
      version: 1,
      shiftTypeId: shiftTypeId || null,
    };
    await dbPut('shifts', shift);
    await logAudit(employeeId, 'CREATE', 'shift', shift.id, { startBalance, employeeIds: [employeeId], shiftNumber });
    return shift;
  },

  async updateShiftType(shiftId, shiftTypeId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    shift.shiftTypeId = shiftTypeId;
    await dbPut('shifts', shift);
    return shift;
  },

  async addEmployeeToShift(shiftId, employeeId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift || shift.status !== 'Открыта') return null;
    if (!shift.employeeIds.includes(employeeId)) {
      shift.employeeIds.push(employeeId);
      await dbPut('shifts', shift);
    }
    return shift;
  },

  async removeEmployeeFromShift(shiftId, employeeId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift || shift.status !== 'Открыта') return null;
    shift.employeeIds = shift.employeeIds.filter(id => id !== employeeId);
    await dbPut('shifts', shift);
    return shift;
  },

  async closeShift(shiftId, values, userId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    if (shift.status === 'Закрыта') return null;
    const oldData = { ...shift };
    shift.revenue = toNum(values.revenue);
    shift.cash = toNum(values.cash);
    shift.cashless = toNum(values.cashless);
    shift.deposit = toNum(values.deposit);
    shift.expense = toNum(values.expense);
    shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    shift.status = 'Закрыта';
    shift.closeDate = nowISO();
    shift.comment = values.comment || '';
    shift.version = (shift.version || 1) + 1;
    const user = await dbGet('users', userId);
    const now = Date.now();
    if (user?.role === 'seller') {
      shift.editDeadline = now + 3 * 3600000;
    } else if (user?.role === 'manager') {
      shift.editDeadline = now + 7 * 86400000;
    } else {
      shift.editDeadline = now + 365 * 86400000 * 100;
    }
    await dbPut('shifts', shift);
    await logAudit(userId, 'CLOSE', 'shift', shiftId, { old: oldData, new: { revenue: shift.revenue, cash: shift.cash, cashless: shift.cashless, expense: shift.expense, endBalance: shift.endBalance } });
    return shift;
  },

  async updateShift(shiftId, values, userId) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    if (shift.status !== 'Закрыта') return null;
    if (shift.editDeadline && Date.now() > shift.editDeadline) return null;
    const oldData = { ...shift };
    shift.revenue = toNum(values.revenue, shift.revenue);
    shift.cash = toNum(values.cash, shift.cash);
    shift.cashless = toNum(values.cashless, shift.cashless);
    shift.deposit = toNum(values.deposit, shift.deposit);
    shift.expense = toNum(values.expense, shift.expense);
    shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    shift.comment = values.comment ?? shift.comment;
    shift.version = (shift.version || 1) + 1;
    await dbPut('shifts', shift);
    await logAudit(userId, 'UPDATE', 'shift', shiftId, { old: oldData, new: values });
    return shift;
  },

  canEditShift(shift, user) {
    if (!shift || shift.status !== 'Закрыта') return false;
    // Fallback для старых смен без editDeadline
    if (!shift.editDeadline) {
      if (user.role === 'owner') return true;
      if (user.role === 'manager') return true;
      return false;
    }
    if (Date.now() > shift.editDeadline) return false;
    if (user.role === 'owner') return true;
    if (user.role === 'manager') return true;
    if (user.role === 'seller' && shift.employeeIds?.includes(user.id)) return true;
    return false;
  },

  async deleteShift(id, userId) {
    const shift = await dbGet('shifts', id);
    if (!shift) return false;
    // Открытую смену можно удалить (свою или если manager/owner)
    if (shift.status === 'Открыта') {
      const user = await dbGet('users', userId);
      if (user.role === 'owner' || user.role === 'manager') {
        // owner/manager может удалить любую открытую
      } else if (!shift.employeeIds?.includes(userId)) {
        return false;
      }
      const ops = await dbGetAll('operations');
      for (const op of ops.filter(o => o.shiftId === id)) {
        await dbDelete('operations', op.id);
        for (const pid of op.photoIds || []) await dbDelete('photos', pid);
      }
      await dbDelete('shifts', id);
      await logAudit(userId, 'DELETE', 'shift', id, { status: 'Открыта' });
      return true;
    }
    // Закрытую — только в срок
    if (shift.status === 'Закрыта') {
      const user = await dbGet('users', userId);
      if (!this.canEditShift(shift, user)) return false;
      const ops = await dbGetAll('operations');
      for (const op of ops.filter(o => o.shiftId === id)) {
        await dbDelete('operations', op.id);
        for (const pid of op.photoIds || []) await dbDelete('photos', pid);
      }
      await dbDelete('shifts', id);
      await logAudit(userId, 'DELETE', 'shift', id, { status: 'Закрыта' });
      return true;
    }
    return false;
  },

  // Operations
  async getOperation(id) {
    return dbGet('operations', id);
  },

  async updateOperation(opId, values, userId) {
    const op = await dbGet('operations', opId);
    if (!op) return null;
    const oldData = { ...op };
    op.amount = toNum(values.amount, op.amount);
    op.type = values.type ?? op.type;
    op.expenseTypeId = values.expenseTypeId ?? op.expenseTypeId;
    op.contractorId = values.contractorId ?? op.contractorId;
    op.counterpartyId = values.counterpartyId ?? op.counterpartyId;
    op.paymentFormId = values.paymentFormId ?? op.paymentFormId;
    op.comment = values.comment ?? op.comment;
    op.photoIds = values.photoIds ?? op.photoIds;
    await dbPut('operations', op);
    await logAudit(userId, 'UPDATE', 'operation', opId, { old: oldData, new: values });

    // Пересчитать цепочку смен
    await this.recalcChain(op.shiftId);

    return op;
  },

  async deleteOperation(id, userId) {
    const op = await dbGet('operations', id);
    if (!op) return false;
    const shiftId = op.shiftId;
    for (const pid of op.photoIds || []) await dbDelete('photos', pid);
    await dbDelete('operations', id);
    await logAudit(userId, 'DELETE', 'operation', id, { amount: op.amount, type: op.type });

    // Пересчитать цепочку смен
    await this.recalcChain(shiftId);

    return true;
  },
  async getOperations() {
    return dbGetAll('operations');
  },

  async getOperationsByShift(shiftId) {
    const ops = await dbGetAll('operations');
    return ops.filter((o) => o.shiftId === shiftId).sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  async getIncomeTotalByShift(shiftId) {
    const ops = await dbGetAll('operations');
    const refs = await this.getReferences();
    const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
    return ops
      .filter(o => o.shiftId === shiftId && o.type === 'income')
      .filter(o => o.paymentFormId === cashFormId)
      .reduce((sum, o) => sum + o.amount, 0);
  },

  async getAllOperations() {
    return dbGetAll('operations');
  },

  async addOperation(op, userId) {
    const operation = {
      id: generateId(),
      date: nowISO(),
      shiftId: op.shiftId,
      amount: Number(op.amount),
      type: op.type,
      expenseTypeId: op.expenseTypeId || null,
      contractorId: op.contractorId || null,
      counterpartyId: op.counterpartyId || null,
      employeeId: op.employeeId,
      paymentFormId: op.paymentFormId,
      comment: op.comment || '',
      photoIds: op.photoIds || [],
    };
    await dbPut('operations', operation);
    await logAudit(userId || op.employeeId, 'CREATE', 'operation', operation.id, { amount: operation.amount, type: operation.type });
    return operation;
  },

  // Photos
  async addPhoto(dataUrl) {
    const photo = { id: generateId(), dataUrl, createdAt: nowISO() };
    await dbPut('photos', photo);
    return photo;
  },

  async getPhoto(id) {
    return dbGet('photos', id);
  },

  async deletePhoto(id) {
    return dbDelete('photos', id);
  },

  // Audit
  async getAuditLog(entityType, entityId) {
    return getAudit(entityType, entityId);
  },

  // Export
  async getAllData() {
    const [shifts, operations, users, audit] = await Promise.all([
      dbGetAll('shifts'),
      dbGetAll('operations'),
      dbGetAll('users'),
      dbGetAll('audit'),
    ]);
    return { shifts, operations, users, audit };
  },
};
