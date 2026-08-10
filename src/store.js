const DB_NAME = 'Bistro24DB';
const DB_VERSION = 1;

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
    { id: 'et1', name: 'Заработная плата', active: true },
    { id: 'et2', name: 'Подрядчик', active: true },
    { id: 'et3', name: 'Хоз.нужды', active: true },
    { id: 'et4', name: 'Прочие выплаты', active: true },
    { id: 'et5', name: 'Закупка продуктов', active: true },
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
};

async function initDefaults() {
  const existing = await dbGetAll('users');
  if (existing.length === 0) {
    for (const u of DEFAULT_USERS) await dbPut('users', u);
  }
  const refs = await dbGet('references', 'main');
  if (!refs) {
    await dbPut('references', { key: 'main', data: DEFAULT_REFS });
  }
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
    return dbGet('users', s.userId);
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

  async saveReferences(data) {
    await dbPut('references', { key: 'main', data });
  },

  // Shifts
  async getShifts() {
    return dbGetAll('shifts');
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
    return shifts.find((s) => s.status === 'Открыта' && s.employeeId === userId);
  },

  async createShift(employeeId) {
    const shifts = await dbGetAll('shifts');
    const closed = shifts
      .filter((s) => s.status === 'Закрыта')
      .sort((a, b) => new Date(b.closeDate || b.openDate) - new Date(a.closeDate || a.openDate));

    const startBalance = closed.length > 0 ? closed[0].endBalance : 0;

    const shift = {
      id: generateId(),
      openDate: nowISO(),
      employeeId,
      employee2Id: null,
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
    };
    await dbPut('shifts', shift);
    return shift;
  },

  async closeShift(shiftId, values) {
    const shift = await dbGet('shifts', shiftId);
    if (!shift) return null;
    shift.revenue = Number(values.revenue) || 0;
    shift.cash = Number(values.cash) || 0;
    shift.cashless = Number(values.cashless) || 0;
    shift.deposit = Number(values.deposit) || 0;
    shift.expense = Number(values.expense) || 0;
    shift.endBalance = shift.startBalance + shift.cash + shift.deposit - shift.expense;
    shift.status = 'Закрыта';
    shift.closeDate = nowISO();
    shift.comment = values.comment || '';
    await dbPut('shifts', shift);
    return shift;
  },

  // Operations
  async getOperations() {
    return dbGetAll('operations');
  },

  async getOperationsByShift(shiftId) {
    const ops = await dbGetAll('operations');
    return ops.filter((o) => o.shiftId === shiftId).sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  async addOperation(op) {
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

  // Export
  async getAllData() {
    const [shifts, operations, users] = await Promise.all([
      dbGetAll('shifts'),
      dbGetAll('operations'),
      dbGetAll('users'),
    ]);
    return { shifts, operations, users };
  },
};
