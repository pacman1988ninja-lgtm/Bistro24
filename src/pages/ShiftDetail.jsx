import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Receipt, Lock, List, AlertCircle } from 'lucide-react';

export default function ShiftDetail({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [ops, setOps] = useState([]);

  useEffect(() => { load(); }, [id]);

  const load = async () => {
    const s = await store.getShift(id);
    const o = await store.getOperationsByShift(id);
    setShift(s);
    setOps(o);
  };

  if (!shift) return <div className="empty-state">Загрузка...</div>;

  const totalIncome = ops.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
  const totalExpense = ops.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
  const canEdit = shift.status === 'Открыта' && (shift.employeeId === user.id || user.role !== 'seller');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><ArrowLeft size={24} /></button>
        <div>
          <h1 style={{ fontSize: 22 }}>Смена #{shift.id.slice(-4)}</h1>
          <span className={'badge ' + (shift.status === 'Открыта' ? 'badge-open' : 'badge-closed')}>{shift.status}</span>
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

      {canEdit && (
        <>
          <button className="btn btn-primary" onClick={() => navigate(`/shift/${id}/operations/new`)} style={{ marginBottom: 12 }}><Receipt size={18} /> Добавить операцию</button>
          <button className="btn btn-success" onClick={() => navigate(`/shift/${id}/close`)}><Lock size={18} /> Закрыть смену</button>
        </>
      )}
    </div>
  );
}
