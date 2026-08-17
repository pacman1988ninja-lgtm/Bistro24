import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Filter, Trash2, Edit3, X, Plus } from 'lucide-react';

export default function AllOperations({ user }) {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [refs, setRefs] = useState({});
  const [users, setUsers] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [photos, setPhotos] = useState({});
  const [filterType, setFilterType] = useState('all');
  const [filterSourceId, setFilterSourceId] = useState('');
  const [filterExpenseTypeId, setFilterExpenseTypeId] = useState('');
  const [filterRelatedId, setFilterRelatedId] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => { load(); }, []);

  const load = async () => {
    const o = await store.getAllOperations();
    const r = await store.getReferences();
    const u = await store.getUsers();
    const s = await store.getShifts();
    setOps(o.sort((a, b) => new Date(b.date) - new Date(a.date)));
    setRefs(r);
    setUsers(u);
    setShifts(s);
    const ph = {};
    for (const op of o) {
      for (const pid of op.photoIds || []) {
        const p = await store.getPhoto(pid);
        if (p) ph[pid] = p.dataUrl;
      }
    }
    setPhotos(ph);
  };

  const handleDelete = async (opId) => {
    if (!confirm('Удалить операцию?')) return;
    await store.deleteOperation(opId, user.id);
    load();
  };

  const getName = (list, id) => refs[list]?.find(x => x.id === id)?.name || '-';
  const getUserName = (id) => users.find(u => u.id === id)?.fullName || '—';
  const getShiftInfo = (shiftId) => {
    const s = shifts.find(sh => sh.id === shiftId);
    return s ? `Смена #${s.id.slice(-4)}` : '—';
  };
  const getRelatedName = (op) => {
    if (op.category === 'goods') {
      const parts = [];
      if (op.writeOffTypeId) parts.push(getName('writeOffTypes', op.writeOffTypeId));
      if (op.counterpartyId) parts.push(getName('counterparties', op.counterpartyId));
      return parts.length > 0 ? parts.join(' • ') : null;
    }
    if (op.sourceId) return getName('incomeSources', op.sourceId);
    if (op.contractorId) return getName('contractors', op.contractorId);
    if (op.counterpartyId) return getName('counterparties', op.counterpartyId);
    return null;
  };
  const canEditOp = (shiftId) => {
    if (!shiftId) return false;
    const s = shifts.find(sh => sh.id === shiftId);
    return store.canEditOperation(s, user);
  };

  const selectedExpenseType = refs.expenseTypes?.find(t => t.id === filterExpenseTypeId);
  const linkedRef = selectedExpenseType?.linkedRef;
  const filterRoles = selectedExpenseType?.filterRoles;

  const getLinkedItems = () => {
    if (!linkedRef || !refs) return [];
    let items = refs[linkedRef]?.filter(t => t.active) || [];
    if (filterRoles && filterRoles.length > 0) {
      items = items.filter(i => filterRoles.includes(i.role));
    }
    if (linkedRef === 'employees' && selectedExpenseType?.name?.toLowerCase().includes('заработная')) {
      items = items.filter(i => i.role === 'seller' || i.role === 'manager');
    }
    return items;
  };

  const linkedItems = getLinkedItems();
  const showLinked = filterType === 'expense' && linkedRef && linkedItems.length > 0;
  const linkedLabel = linkedRef === 'employees' ? 'Сотрудник' : linkedRef === 'contractors' ? 'Подрядчик' : linkedRef === 'counterparties' ? 'Контрагент' : 'Связанный';

  const handleTypeChange = (value) => {
    setFilterType(value);
    setFilterSourceId('');
    setFilterExpenseTypeId('');
    setFilterRelatedId('');
  };

  const handleExpenseTypeChange = (value) => {
    setFilterExpenseTypeId(value);
    setFilterRelatedId('');
  };

  const hasActiveFilters = filterType !== 'all' || filterSourceId || filterExpenseTypeId || filterRelatedId;

  const resetFilters = () => {
    setFilterType('all');
    setFilterSourceId('');
    setFilterExpenseTypeId('');
    setFilterRelatedId('');
  };

  const filtered = ops.filter(op => {
    if (filterType === 'all') return true;
    if (filterType === 'income') {
      if (op.type !== 'income') return false;
      if (filterSourceId && op.sourceId !== filterSourceId) return false;
      return true;
    }
    if (filterType === 'expense') {
      if (op.type !== 'expense') return false;
      if (filterExpenseTypeId && op.expenseTypeId !== filterExpenseTypeId) return false;
      if (filterRelatedId) {
        if (linkedRef === 'employees' && op.employeeId !== filterRelatedId) return false;
        if (linkedRef === 'contractors' && op.contractorId !== filterRelatedId) return false;
        if (linkedRef === 'counterparties' && op.counterpartyId !== filterRelatedId) return false;
      }
      return true;
    }
    return true;
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
          <h1 style={{ fontSize: 22 }}>Все операции</h1>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/goods-operation/new')} style={{ padding: '10px 16px', whiteSpace: 'nowrap' }}>
          Товарная операция
        </button>
      </div>

      <button className="btn btn-secondary" onClick={() => setShowFilters(!showFilters)} style={{ marginBottom: 12, position: 'relative' }}>
        <Filter size={18} /> Фильтры
        {hasActiveFilters && (
          <span style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }} />
        )}
      </button>

      {showFilters && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="form-group" style={{ marginBottom: 12 }}>
            <label className="form-label">Тип операции</label>
            <select className="form-select" value={filterType} onChange={e => handleTypeChange(e.target.value)}>
              <option value="all">Все</option>
              <option value="income">Приход</option>
              <option value="expense">Расход</option>
            </select>
          </div>

          {filterType === 'income' && (
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Источник поступления</label>
              <select className="form-select" value={filterSourceId} onChange={e => setFilterSourceId(e.target.value)}>
                <option value="">Все источники</option>
                {refs.incomeSources?.filter(t => t.active).map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
          )}

          {filterType === 'expense' && (
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Статья расхода</label>
              <select className="form-select" value={filterExpenseTypeId} onChange={e => handleExpenseTypeChange(e.target.value)}>
                <option value="">Все статьи</option>
                {refs.expenseTypes?.filter(t => t.active).map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
          )}

          {showLinked && (
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">{linkedLabel}</label>
              <select className="form-select" value={filterRelatedId} onChange={e => setFilterRelatedId(e.target.value)}>
                <option value="">Все {linkedLabel.toLowerCase()}ы</option>
                {linkedItems.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          )}

          {hasActiveFilters && (
            <button className="btn btn-secondary" onClick={resetFilters} style={{ fontSize: 13 }}>
              <X size={14} style={{ marginRight: 4 }} /> Сбросить фильтр
            </button>
          )}
        </div>
      )}

      {filtered.length === 0 && <div className="empty-state">Нет операций</div>}

      {filtered.map(op => (
        <div key={op.id} className="card" style={{ marginBottom: 12 }}>
          <div className="list-item" style={{ marginBottom: 0, padding: 0, background: 'none', border: 'none' }}>
            <div className="list-item-info" style={{ flex: 1 }}>
              {op.category === 'goods' ? (
                <>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>
                    {op.type === 'income'
                      ? (getName('counterparties', op.counterpartyId) || '—')
                      : (getName('writeOffTypes', op.writeOffTypeId) || 'Товарное списание')}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {op.type === 'income' ? 'Товарный приход' : 'Товарное списание'}
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{new Date(op.date).toLocaleString('ru-RU')}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{getShiftInfo(op.shiftId)} • {getUserName(op.employeeId)}</p>
                  <p style={{ fontSize: 11, color: 'var(--success)', marginTop: 4 }}>товар</p>
                </>
              ) : (
                <>
                  <h3>{getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Внесение' : 'Расход')}</h3>
                  <p>{new Date(op.date).toLocaleString('ru-RU')} • {getName('paymentForms', op.paymentFormId)}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{getShiftInfo(op.shiftId)} • {getUserName(op.employeeId)}</p>
                  {getRelatedName(op) && <p style={{ fontSize: 12, marginTop: 2, color: 'var(--text-secondary)' }}>{getRelatedName(op)}</p>}
                </>
              )}
              {op.comment && <p style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>{op.comment}</p>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className={'list-item-amount ' + (op.type === 'income' ? 'amount-income' : 'amount-expense')}>
                {op.type === 'income' ? '+' : '-'}{op.amount.toLocaleString('ru-RU')} ₽
              </div>
              {canEditOp(op.shiftId) && (
                <>
                  <button onClick={() => navigate(`/shift/${op.shiftId}/operations/${op.id}/edit`)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}>
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => handleDelete(op.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}>
                    <Trash2 size={14} />
                  </button>
                </>
              )}
            </div>
          </div>
          {op.photoIds?.length > 0 && (
            <div className="photo-grid" style={{ marginTop: 12 }}>
              {op.photoIds.map(pid => (
                <img key={pid} src={photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
