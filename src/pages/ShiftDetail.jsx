import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Receipt, Lock, List, AlertCircle, Edit3, History, Trash2 } from 'lucide-react';

export default function ShiftDetail({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [ops, setOps] = useState([]);
  const [audit, setAudit] = useState([]);

  useEffect(() => { load(); }, [id]);

  const load = async () => {
    const s = await store.getShift(id);
    const o = await store.getOperationsByShift(id);
    const a = await store.getAuditLog('shift', id);
    setShift(s);
    setOps(o);
    setAudit(a);
  };

  const handleDelete = async () => {
    if (!confirm('Удалить открытую смену? Все операции будут удалены.')) return;
    await store.deleteShift(id);
    navigate('/');
  };

  if (!shift) return <div className="empty-state">Загрузка...</div>;

  const totalIncome = ops.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
  const totalExpense = ops.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
  const canEdit = shift.status === 'Открыта' && (shift.employeeId === user.id || user.role !== 'seller');
  const canModifyClosed = store.canEditShift(shift, user);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 22 }}>Смена #{shift.id.slice(-4)}</h1>
          <span className={'badge ' + (shift.status === 'Открыта' ? 'badge-open' : 'badge-closed')}>{shift.status}</span>
        </div>
        {shift.status === 'Закрыта' && canModifyClosed && (
          <button onClick={() => navigate(`/shift/${id}/edit`)} style={{ background: 'var(--warning)', border: 'none', borderRadius: 8, padding: '8px 12px', color: '#000', fontSize: 12, fontWeight: 600 }}>
            <Edit3 size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />Изменить
          </button>
        )}
      </div>

      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)' }}>
          <span>Открыта: {new Date(shift.openDate).toLocaleString('ru-RU')}</span>
          {shift.closeDate && <span>Закрыта: {new Date(shift.closeDate).toLocaleString('ru-RU')}</span>}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card"><h3>Начало</h3><p>{shift.startBalance.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Конец</h3><p>{shift.endBalance.toLocaleString('ru-RU')} ₽</p></div>
      </div>

      {shift.status === 'Закрыта' && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title">Итоги закрытия</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Выручка</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.revenue.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Наличные</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.cash.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Безнал</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.cashless.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Расход</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.expense.toLocaleString('ru-RU')} ₽</div></div>
          </div>
          {shift.revenue !== shift.cash + shift.cashless && (
            <div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <AlertCircle size={14} /> Выручка ≠ Наличные + Безнал
            </div>
          )}
        </div>
      )}

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Операции</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 24, color: 'var(--success)', fontWeight: 700 }}>+{totalIncome.toLocaleString('ru-RU')}</div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Приход</div></div>
          <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 24, color: 'var(--danger)', fontWeight: 700 }}>-{totalExpense.toLocaleString('ru-RU')}</div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Расход</div></div>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate(`/shift/${id}/operations`)}><List size={18} /> Журнал операций</button>
      </div>

      {audit.length > 0 && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title"><History size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} /> История изменений</div>
          {audit.slice(0, 5).map(a => (
            <div key={a.id} style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 4 }}>
              {new Date(a.timestamp).toLocaleString('ru-RU')} — {a.action} {a.details?.new ? `(выручка: ${a.details.new.revenue} ₽)` : ''}
            </div>
          ))}
        </div>
      )}

      {canEdit && (
        <>
          <button className="btn btn-primary" onClick={() => navigate(`/shift/${id}/operations/new`)} style={{ marginBottom: 12 }}><Receipt size={18} /> Добавить операцию</button>
          <button className="btn btn-success" onClick={() => navigate(`/shift/${id}/close`)} style={{ marginBottom: 12 }}><Lock size={18} /> Закрыть смену</button>
          <button className="btn btn-danger" onClick={handleDelete}><Trash2 size={18} /> Удалить смену</button>
        </>
      )}
    </div>
  );
}
