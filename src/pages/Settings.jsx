import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, LogOut, BookOpen } from 'lucide-react';
import ExportExcel from '../components/ExportExcel';

export default function Settings({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    store.logout();
    window.location.reload();
  };

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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <ExportExcel />
        {(user.role === 'owner' || user.role === 'manager') && (
          <button className="btn btn-secondary" onClick={() => navigate('/departments')}>
            <BookOpen size={18} /> Справочники
          </button>
        )}
        <button className="btn btn-danger" onClick={handleLogout} style={{ marginTop: 20 }}>
          <LogOut size={18} /> Выйти
        </button>
      </div>

      <div style={{ marginTop: 24, padding: 12, background: 'var(--surface)', borderRadius: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Бистро24 v1.9</div>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>Данные хранятся локально</div>
      </div>
    </div>
  );
}
