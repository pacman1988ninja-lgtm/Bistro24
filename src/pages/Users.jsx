import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Plus, UserCheck, Trash2, Edit3, Check, X, BookOpen } from 'lucide-react';

export default function Users({ user }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState('team');
  const [users, setUsers] = useState([]);
  const [refs, setRefs] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', pin: '', role: 'seller' });
  const [refTab, setRefTab] = useState('expenseTypes');
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => { load(); }, []);

  const load = async () => {
    setUsers(await store.getUsers());
    setRefs(await store.getReferences());
  };

  const handleAdd = async () => {
    if (!form.fullName || !form.pin) return alert('Заполните имя и PIN');
    await store.addUser(form);
    setForm({ fullName: '', email: '', pin: '', role: 'seller' });
    setShowForm(false);
    load();
  };

  const addRefItem = () => {
    if (!newName.trim()) return;
    const updated = { ...refs };
    const list = [...(updated[refTab] || [])];
    list.push({ id: 'ref_' + Date.now(), name: newName.trim(), active: true });
    updated[refTab] = list;
    store.saveReferences(updated).then(() => setRefs(updated));
    setNewName('');
  };

  const saveEdit = () => {
    if (!editName.trim()) return;
    const updated = { ...refs };
    updated[refTab] = updated[refTab].map(i => i.id === editingId ? { ...i, name: editName.trim() } : i);
    store.saveReferences(updated).then(() => setRefs(updated));
    setEditingId(null);
    setEditName('');
  };

  const deleteRefItem = (id) => {
    if (!confirm('Удалить запись?')) return;
    const updated = { ...refs };
    updated[refTab] = updated[refTab].filter(i => i.id !== id);
    store.saveReferences(updated).then(() => setRefs(updated));
  };

  const toggleActive = (id) => {
    const updated = { ...refs };
    updated[refTab] = updated[refTab].map(i => i.id === id ? { ...i, active: !i.active } : i);
    store.saveReferences(updated).then(() => setRefs(updated));
  };

  const refTabs = [
    { key: 'expenseTypes', label: 'Статьи расходов' },
    { key: 'paymentForms', label: 'Формы оплаты' },
    { key: 'contractors', label: 'Подрядчики' },
    { key: 'counterparties', label: 'Контрагенты' },
  ];

  if (user.role !== 'owner') {
    return <div className="empty-state">Доступ только для владельца</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Команда и справочники</h1>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button className={'btn ' + (tab === 'team' ? 'btn-primary' : 'btn-secondary')} onClick={() => setTab('team')} style={{ flex: 1 }}>Команда</button>
        <button className={'btn ' + (tab === 'refs' ? 'btn-primary' : 'btn-secondary')} onClick={() => setTab('refs')} style={{ flex: 1 }}><BookOpen size={14} /> Справочники</button>
      </div>

      {tab === 'team' && (
        <>
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
        </>
      )}

      {tab === 'refs' && (
        <>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 16 }}>
            {refTabs.map(t => (
              <button key={t.key} onClick={() => { setRefTab(t.key); setEditingId(null); }} className={'btn ' + (refTab === t.key ? 'btn-primary' : 'btn-secondary')} style={{ padding: '8px 14px', fontSize: 13, whiteSpace: 'nowrap', flex: '0 0 auto' }}>{t.label}</button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <input type="text" className="form-input" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Новая запись..." style={{ flex: 1 }} />
            <button className="btn btn-primary" onClick={addRefItem} style={{ width: 'auto', padding: '14px 20px' }}><Plus size={18} /></button>
          </div>

          {(refs[refTab] || []).map(item => (
            <div key={item.id} className="list-item">
              {editingId === item.id ? (
                <>
                  <input type="text" className="form-input" value={editName} onChange={e => setEditName(e.target.value)} style={{ flex: 1, marginRight: 8 }} />
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={saveEdit} style={{ background: 'var(--success)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Check size={14} /></button>
                    <button onClick={() => setEditingId(null)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><X size={14} /></button>
                  </div>
                </>
              ) : (
                <>
                  <div className="list-item-info" style={{ flex: 1 }}><h3>{item.name}</h3></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button onClick={() => toggleActive(item.id)} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11 }}>
                      {item.active ? 'Активна' : 'Скрыта'}
                    </button>
                    <button onClick={() => { setEditingId(item.id); setEditName(item.name); }} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}><Edit3 size={14} /></button>
                    <button onClick={() => deleteRefItem(item.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Trash2 size={14} /></button>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
