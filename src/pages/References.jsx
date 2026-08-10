import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Plus } from 'lucide-react';

export default function References({ user }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState('expenseTypes');
  const [refs, setRefs] = useState({});
  const [newName, setNewName] = useState('');

  useEffect(() => { load(); }, []);

  const load = async () => {
    const r = await store.getReferences();
    setRefs(r);
  };

  const save = async (updated) => {
    await store.saveReferences(updated);
    setRefs(updated);
  };

  const addItem = () => {
    if (!newName.trim()) return;
    const updated = { ...refs };
    const list = [...(updated[tab] || [])];
    list.push({ id: 'ref_' + Date.now(), name: newName.trim(), active: true });
    updated[tab] = list;
    save(updated);
    setNewName('');
  };

  const toggleActive = (id) => {
    const updated = { ...refs };
    updated[tab] = updated[tab].map(i => i.id === id ? { ...i, active: !i.active } : i);
    save(updated);
  };

  const tabs = [
    { key: 'expenseTypes', label: 'Статьи расходов' },
    { key: 'paymentForms', label: 'Формы оплаты' },
    { key: 'contractors', label: 'Подрядчики' },
    { key: 'counterparties', label: 'Контрагенты' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={() => navigate('/settings')} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Справочники</h1>
      </div>

      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 16 }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} className={'btn ' + (tab === t.key ? 'btn-primary' : 'btn-secondary')} style={{ padding: '8px 14px', fontSize: 13, whiteSpace: 'nowrap', flex: '0 0 auto' }}>{t.label}</button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input type="text" className="form-input" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Новая запись..." style={{ flex: 1 }} />
        <button className="btn btn-primary" onClick={addItem} style={{ width: 'auto', padding: '14px 20px' }}><Plus size={18} /></button>
      </div>

      {(refs[tab] || []).map(item => (
        <div key={item.id} className="list-item">
          <div className="list-item-info"><h3>{item.name}</h3></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => toggleActive(item.id)} className="btn btn-secondary" style={{ width: 'auto', padding: '8px 12px', fontSize: 12 }}>
              {item.active ? 'Активна' : 'Скрыта'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
