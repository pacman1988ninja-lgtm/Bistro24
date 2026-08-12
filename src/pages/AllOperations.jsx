import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Filter, Trash2, Edit3 } from 'lucide-react';

export default function AllOperations({ user }) {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [refs, setRefs] = useState({});
  const [users, setUsers] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [photos, setPhotos] = useState({});
  const [filterType, setFilterType] = useState('all');
  const [filterExpense, setFilterExpense] = useState('all');
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
  const canEditOp = (shiftId) => {
    const s = shifts.find(sh => sh.id === shiftId);
    return s?.status === 'Открыта';
  };

  const filtered = ops.filter(op => {
    if (filterType === 'all') return true;
    if (filterType === 'income') return op.type === 'income';
    if (filterType === 'expense') return op.type === 'expense';
    return true;
  }).filter(op => {
    if (filterExpense === 'all') return true;
    if (op.type === 'expense') return op.expenseTypeId === filterExpense;
    return true;
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Все операции</h1>
      </div>

      <button className="btn btn-secondary" onClick={() => setShowFilters(!showFilters)} style={{ marginBottom: 12 }}>
        <Filter size={18} /> Фильтры
      </button>

      {showFilters && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="form-group">
            <label className="form-label">Тип</label>
            <select className="form-select" value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="all">Все</option>
              <option value="income">Приход</option>
              <option value="expense">Расход</option>
            </select>
          </div>
          {filterType === 'expense' && (
            <div className="form-group">
              <label className="form-label">Статья расхода</label>
              <select className="form-select" value={filterExpense} onChange={e => setFilterExpense(e.target.value)}>
                <option value="all">Все статьи</option>
                {refs.expenseTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          )}
        </div>
      )}

      {filtered.length === 0 && <div className="empty-state">Нет операций</div>}

      {filtered.map(op => (
        <div key={op.id} className="card" style={{ marginBottom: 12 }}>
          <div className="list-item" style={{ marginBottom: 0, padding: 0, background: 'none', border: 'none' }}>
            <div className="list-item-info" style={{ flex: 1 }}>
              <h3>{getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Поступление' : 'Расход')}</h3>
              <p>{new Date(op.date).toLocaleString('ru-RU')} • {getName('paymentForms', op.paymentFormId)}</p>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{getShiftInfo(op.shiftId)} • {getUserName(op.employeeId)}</p>
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
