import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { Package, Receipt, Filter, Trash2, Edit3, X } from 'lucide-react';

export default function AllOperations({ user }) {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [refs, setRefs] = useState({});
  const [users, setUsers] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [photos, setPhotos] = useState({});
  const [filterType, setFilterType] = useState('all');
  const [filterRefType, setFilterRefType] = useState('');
  const [filterRefId, setFilterRefId] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const refTypeOptions = [
    { key: 'counterparties', label: 'Контрагенты' },
    { key: 'incomeSources', label: 'Источники поступления' },
    { key: 'expenseTypes', label: 'Статьи расхода' },
    { key: 'employees', label: 'Сотрудники' },
    { key: 'contractors', label: 'Подрядчики' },
    { key: 'writeOffTypes', label: 'Типы списания' },
  ];

  useEffect(() => {
    if (user?.role === 'seller') {
      navigate('/');
      return;
    }
    load();
  }, []);

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
    return s ? `Смена #${s.shiftNumber || s.id.slice(-4)}` : '—';
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
    // Для расходов на зарплату employeeId содержит получателя, а не создателя
    if (op.type === 'expense' && op.employeeId) {
      const expenseType = refs.expenseTypes?.find(t => t.id === op.expenseTypeId);
      if (expenseType?.linkedRef === 'employees') {
        return getName('employees', op.employeeId);
      }
    }
    return null;
  };
  const canEditOp = (shiftId) => {
    if (!shiftId) return true;
    const s = shifts.find(sh => sh.id === shiftId);
    return s?.status === 'Открыта' && store.canEditOperation(s, user);
  };

  const selectedRefLabel = refTypeOptions.find(r => r.key === filterRefType)?.label || 'Элемент';

  const handleTypeChange = (value) => {
    setFilterType(value);
  };

  const handleRefTypeChange = (value) => {
    setFilterRefType(value);
    setFilterRefId('');
  };

  const hasActiveFilters = filterType !== 'all' || filterRefType;

  const resetFilters = () => {
    setFilterType('all');
    setFilterRefType('');
    setFilterRefId('');
  };

  const filtered = ops.filter(op => {
    if (filterType === 'income' && op.type !== 'income') return false;
    if (filterType === 'expense' && op.type !== 'expense') return false;
    if (filterRefType && filterRefId) {
      if (filterRefType === 'counterparties' && op.counterpartyId !== filterRefId) return false;
      if (filterRefType === 'incomeSources' && op.sourceId !== filterRefId) return false;
      if (filterRefType === 'expenseTypes' && op.expenseTypeId !== filterRefId) return false;
      if (filterRefType === 'employees' && op.employeeId !== filterRefId) return false;
      if (filterRefType === 'contractors' && op.contractorId !== filterRefId) return false;
      if (filterRefType === 'writeOffTypes' && op.writeOffTypeId !== filterRefId) return false;
    }
    return true;
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, paddingTop: 'env(safe-area-inset-top)' }}>
        <button className="btn btn-success" onClick={() => navigate('/goods-operation/new')} style={{ flex: 1, padding: '14px 0', fontSize: 15 }}>
          <Package size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Товарная
        </button>
        <button className="btn btn-danger" onClick={() => navigate('/cash-operation/new')} style={{ flex: 1, padding: '14px 0', fontSize: 15 }}>
          <Receipt size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Безналичная
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
              <option value="all">Все операции</option>
              <option value="income">Приход</option>
              <option value="expense">Расход</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 12 }}>
            <label className="form-label">Справочник</label>
            <select className="form-select" value={filterRefType} onChange={e => handleRefTypeChange(e.target.value)}>
              <option value="">Все справочники</option>
              {refTypeOptions.map(r => (
                <option key={r.key} value={r.key}>{r.label}</option>
              ))}
            </select>
          </div>

          {filterRefType && (
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">{selectedRefLabel}</label>
              <select className="form-select" value={filterRefId} onChange={e => setFilterRefId(e.target.value)}>
                <option value="">Все</option>
                {refs[filterRefType]?.filter(t => t.active).map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
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
                  <button onClick={() => navigate(op.shiftId ? `/shift/${op.shiftId}/operations/${op.id}/edit` : `/operation/${op.id}/edit`)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}>
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
