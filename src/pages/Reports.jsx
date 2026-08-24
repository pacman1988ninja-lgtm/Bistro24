import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ExportExcel from '../components/ExportExcel';

function localDateStr(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function Reports({ user }) {
  const navigate = useNavigate();
  const [shifts, setShifts] = useState([]);
  const [period, setPeriod] = useState('week');

  useEffect(() => {
    if (user?.role === 'seller') {
      navigate('/');
      return;
    }
    store.getShifts().then(all => setShifts(all.filter(s => s.status === 'Закрыта')));
  }, []);

  const now = new Date();
  const todayStr = localDateStr(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  const weekStr = localDateStr(new Date(now.getTime() - 7 * 86400000));
  const monthStr = localDateStr(new Date(now.getFullYear(), now.getMonth(), 1));

  const filters = {
    today: todayStr,
    week: weekStr,
    month: monthStr,
  };

  const filtered = shifts.filter(s => localDateStr(s.closeDate) >= filters[period]);
  const totalRevenue = filtered.reduce((sum, s) => sum + s.revenue, 0);
  const totalCash = filtered.reduce((sum, s) => sum + s.cash, 0);
  const totalCashless = filtered.reduce((sum, s) => sum + s.cashless, 0);
  const totalExpense = filtered.reduce((sum, s) => sum + s.expense, 0);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Отчёты</h1>
      </div>

      <ExportExcel />

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[{k:'today',l:'День'},{k:'week',l:'Неделя'},{k:'month',l:'Месяц'}].map(p => (
          <button key={p.k} className={'btn ' + (period === p.k ? 'btn-primary' : 'btn-secondary')} onClick={() => setPeriod(p.k)} style={{ flex: 1, padding: 10 }}>{p.l}</button>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card"><h3>Выручка</h3><p>{totalRevenue.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Наличные</h3><p>{totalCash.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Безнал</h3><p>{totalCashless.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Расход</h3><p>{totalExpense.toLocaleString('ru-RU')} ₽</p></div>
      </div>

      <h2 style={{ fontSize: 16, marginBottom: 12, color: 'var(--text-secondary)' }}>Смены за период</h2>
      {filtered.length === 0 && <div className="empty-state">Нет данных</div>}
      {filtered.map(s => (
        <div key={s.id} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Смена #{s.id.slice(-4)}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{new Date(s.closeDate).toLocaleDateString('ru-RU')}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{s.revenue.toLocaleString('ru-RU')} ₽</div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>остаток: {s.endBalance.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}