import { useState } from 'react';
import { store } from '../store';
import { LogIn } from 'lucide-react';

export default function Login({ onLogin }) {
  const [pin, setPin] = useState('');
  const [mode, setMode] = useState('pin');

  const handlePin = async () => {
    const user = await store.loginByPin(pin);
    if (user) onLogin(user);
    else alert('Неверный PIN');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24, maxWidth: 430, margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>Бистро24</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Кассовый учёт смен</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <button className={'btn ' + (mode === 'pin' ? 'btn-primary' : 'btn-secondary')} onClick={() => setMode('pin')} style={{ flex: 1 }}>PIN</button>
      </div>

      <div className="form-group">
        <label className="form-label">PIN-код</label>
        <input type="password" inputMode="numeric" className="form-input" value={pin} onChange={e => setPin(e.target.value)} placeholder="••••" maxLength={4} />
      </div>
      <button className="btn btn-primary" onClick={handlePin}><LogIn size={18} /> Войти</button>

      <div style={{ marginTop: 24, padding: 16, background: 'var(--surface)', borderRadius: 12 }}>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 8 }}>Демо-доступ:</p>
        <div style={{ fontSize: 13, marginBottom: 4 }}><span className="role-badge role-seller">Продавец</span> PIN 1111</div>
        <div style={{ fontSize: 13, marginBottom: 4 }}><span className="role-badge role-manager">Управляющий</span> PIN 2222</div>
        <div style={{ fontSize: 13 }}><span className="role-badge role-owner">Владелец</span> PIN 3333</div>
      </div>
    </div>
  );
}
