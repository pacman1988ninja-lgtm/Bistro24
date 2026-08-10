import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Plus, UserCheck } from 'lucide-react';

export default function Users({ user }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', pin: '', role: 'seller' });

  useEffect(() => { load(); }, []);

  const load = async () => setUsers(await store.getUsers());

  const handleAdd = async () => {
    if (!form.fullName || !form.pin) return alert('Заполните имя и PIN');
    await store.addUser(form);
    setForm({ fullName: '', email: '', pin: '', role: 'seller' });
    setShowForm(false);
    load();
  };

  if (user.role !== 'owner') {
    return <div className="empty-state">Доступ только для владельца</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Команда</h1>
      </div>

      <button className="btn btn-primary" onClick={() => setShowForm(!showForm)} style={{ marginBottom: 16 }}>
        <Plus size={18} /> Добавить сотрудника
      </button>

      {showForm && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="form-group"><label className="form-label">ФИО</label><input className="form-input" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} /></div>
          <div className="form-group"><label className="form-label">Email</label><input type="email" className="form-input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
          <div className="form-group"><label className="form-label">PIN (4 цифры)</label><input className="form-input" value={form.pin} onChange={e => setForm({...form, pin: e.target.value})} maxLength={4} inputMode="numeric" /></div>
          <div className="form-group"><label className="form-label">Роль</label>
            <select className="form-select" value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
              <option value="seller">Продавец</option>
              <option value="manager">Управляющий</option>
              <option value="owner">Владелец</option>
            </select>
          </div>
          <button className="btn btn-success" onClick={handleAdd}><UserCheck size={18} /> Сохранить</button>
        </div>
      )}

      {users.map(u => (
        <div key={u.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
            {u.fullName.charAt(0)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>{u.fullName}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{u.email || '—'}</div>
          </div>
          <span className={`role-badge role-${u.role}`}>{u.role}</span>
        </div>
      ))}
    </div>
  );
}
