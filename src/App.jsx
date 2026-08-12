import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { store } from './store';
import Login from './pages/Login';
import Home from './pages/Home';
import ShiftDetail from './pages/ShiftDetail';
import EditShift from './pages/EditShift';
import Operations from './pages/Operations';
import NewOperation from './pages/NewOperation';
import EditOperation from './pages/EditOperation';
import AllOperations from './pages/AllOperations';
import CloseShift from './pages/CloseShift';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Departments from './pages/Departments';
import BottomNav from './components/BottomNav';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.init().then(() => {
      store.getCurrentUser().then((u) => {
        if (u) setUser(u);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f1a', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Бистро24</div>
          <div style={{ color: '#a0a0b8' }}>Загрузка...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Bistro24/'}>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/shift/:id" element={<ShiftDetail user={user} />} />
            <Route path="/shift/:id/edit" element={<EditShift user={user} />} />
            <Route path="/shift/:id/operations" element={<Operations user={user} />} />
            <Route path="/shift/:id/operations/new" element={<NewOperation user={user} />} />
            <Route path="/shift/:id/operations/:opId/edit" element={<EditOperation user={user} />} />
            <Route path="/shift/:id/close" element={<CloseShift user={user} />} />
            <Route path="/operations" element={<AllOperations user={user} />} />
            <Route path="/reports" element={<Reports user={user} />} />
            <Route path="/settings" element={<Settings user={user} />} />
            <Route path="/departments" element={<Departments user={user} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <BottomNav user={user} />
      </div>
    </BrowserRouter>
  );
}

export default App;
