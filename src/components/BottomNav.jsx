import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Settings, Users, FileText } from 'lucide-react';

export default function BottomNav({ user }) {
  if (!user) return null;
  const isManager = user.role === 'manager' || user.role === 'owner';
  const isOwner = user.role === 'owner';

  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} end>
        <Home size={22} /><span>Смены</span>
      </NavLink>
      <NavLink to="/operations" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
        <FileText size={22} /><span>Операции</span>
      </NavLink>
      {isManager && (
        <NavLink to="/reports" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
          <BarChart2 size={22} /><span>Отчёты</span>
        </NavLink>
      )}
      {isOwner && (
        <NavLink to="/users" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
          <Users size={22} /><span>Команда</span>
        </NavLink>
      )}
      <NavLink to="/settings" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
        <Settings size={22} /><span>Настройки</span>
      </NavLink>
    </nav>
  );
}
