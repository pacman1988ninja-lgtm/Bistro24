import { NavLink } from 'react-router-dom';
import { Home, Settings, FileText, Wallet, Handshake } from 'lucide-react';

export default function BottomNav({ user }) {
  if (!user) return null;
  const isManager = user.role === 'manager' || user.role === 'owner';
  const isOwner = user.role === 'owner';
  const isSeller = user.role === 'seller';

  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} end>
        <Home size={22} /><span>Смены</span>
      </NavLink>
      <NavLink to="/payroll" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
        <Wallet size={22} /><span>Зарплата</span>
      </NavLink>
      {!isSeller && (
        <NavLink to="/operations" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
          <FileText size={22} /><span>Операции</span>
        </NavLink>
      )}
      {isManager && (
        <NavLink to="/settlements" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
          <Handshake size={22} /><span>Взаиморасчёты</span>
        </NavLink>
      )}
      <NavLink to="/settings" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
        <Settings size={22} /><span>Настройки</span>
      </NavLink>
    </nav>
  );
}
