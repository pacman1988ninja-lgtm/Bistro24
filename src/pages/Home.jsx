import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { Plus, ArrowRight } from 'lucide-react';
import ExportExcel from '../components/ExportExcel';

export default function Home({ user }) {
  const navigate = useNavigate();
  const [shifts, setShifts] = useState([]);
  const [openShift, setOpenShift] = useState(null);
  const [refs, setRefs] = useState({});
  const [stats, setStats] = useState({ today: 0, week: 0 });

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    const all = await store.getShifts();
    const r = await store.getReferences();
    setRefs(r);
    const sorted = all.sort((a, b) => new Date(b.openDate) - new Date(a.openDate));
    setShifts(sorted);
    const open = sorted.find(s => s.status === 'Открыта');
    setOpenShift(open);

    if (user.role !== 'seller') {
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
      const weekStart = new Date(now.getTime() - 7 * 86400000).toISOString();
      const closed = all.filter(s => s.status === 'Закрыта');
      setStats({
        today: closed.filter(s => s.closeDate >= todayStart).reduce((sum, s) => sum + s.revenue, 0),
        week: closed.filter(s => s.closeDate >= weekStart).reduce((sum, s) => sum + s.revenue, 0),
      });
    }
  };

  const getEmpName = (id) => refs.employees?.find(e => e.id === id)?.name || '—';
  const getEmpShiftTypeName = (shift, empId) => {
    const tid = shift.employeeShiftTypes?.[empId] ?? shift.shiftTypeId ?? null;
    return tid ? refs.shiftTypes?.find(t => t.id === tid)?.name : null;
  };

  const handleCreate = async () => {
    if (user.role === 'seller' && openShift) {
      alert('У вас уже есть открытая смена!');
      navigate(`/shift/${openShift.id}`);
      return;
    }
    const shift = await store.createShift(user.id);
    navigate(`/shift/${shift.id}`);
  };

  const isManager = user.role === 'manager' || user.role === 'owner';

  return (
    <div>
      <div className="page-header">
        <h1>Смены</h1>
        <p>Привет, {user.fullName} <span className={`role-badge role-${user.role}`}>{user.role}</span></p>
      </div>

      {isManager && (
        <div className="stats-grid" style={{ marginBottom: 16 }}>
          <div className="stat-card"><h3>Сегодня</h3><p>{stats.today.toLocaleString('ru-RU')} ₽</p></div>
          <div className="stat-card"><h3>Неделя</h3><p>{stats.week.toLocaleString('ru-RU')} ₽</p></div>
        </div>
      )}

      {openShift && (
        <div className="card" style={{ borderLeft: '4px solid var(--success)', cursor: 'pointer' }} onClick={() => navigate(`/shift/${openShift.id}`)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <span className="badge badge-open">Открыта</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 8 }}>{new Date(openShift.openDate).toLocaleString('ru-RU')}</p>
              <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {openShift.employeeIds?.map(eid => (
                  <span key={eid} style={{ background: 'var(--surface-light)', padding: '4px 10px', borderRadius: 12, fontSize: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>{getEmpName(eid)}</span>
                    {getEmpShiftTypeName(openShift, eid) && (
                      <span style={{ color: 'var(--text-secondary)', fontSize: 10 }}>{getEmpShiftTypeName(openShift, eid)}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>#{openShift.shiftNumber || openShift.id.slice(-4)}</div>
              <ArrowRight size={24} color="var(--text-secondary)" style={{ marginTop: 8 }} />
            </div>
          </div>
          <div className="stats-grid" style={{ marginTop: 12, marginBottom: 0 }}>
            <div className="stat-card" style={{ padding: 12 }}><h3>Начало</h3><p>{openShift.startBalance.toLocaleString('ru-RU')} ₽</p></div>
            <div className="stat-card" style={{ padding: 12 }}><h3>Остаток</h3><p>{openShift.endBalance.toLocaleString('ru-RU')} ₽</p></div>
          </div>
        </div>
      )}

      <button className="btn btn-primary" onClick={handleCreate} style={{ marginBottom: 20 }}>
        <Plus size={20} /> {openShift ? 'Новая смена' : 'Открыть смену'}
      </button>

      {isManager && <ExportExcel />}

      <h2 style={{ fontSize: 16, marginBottom: 12, color: 'var(--text-secondary)' }}>История</h2>
      {shifts.filter(s => s.status === 'Закрыта').length === 0 && <div className="empty-state">Нет закрытых смен</div>}
      {shifts.filter(s => s.status === 'Закрыта').slice(0, 10).map(shift => (
        <div key={shift.id} className="card" onClick={() => navigate(`/shift/${shift.id}`)} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <span className="badge badge-closed">Закрыта</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 8 }}>{new Date(shift.openDate).toLocaleDateString('ru-RU')}</p>
              <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {shift.employeeIds?.map(eid => (
                  <span key={eid} style={{ background: 'var(--surface-light)', padding: '4px 10px', borderRadius: 12, fontSize: 11, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>{getEmpName(eid)}</span>
                    {getEmpShiftTypeName(shift, eid) && (
                      <span>{getEmpShiftTypeName(shift, eid)}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>#{shift.shiftNumber || shift.id.slice(-4)}</div>
              <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>{shift.revenue.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
