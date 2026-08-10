import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, AlertCircle, Lock } from 'lucide-react';

export default function CloseShift({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [revenue, setRevenue] = useState('');
  const [cash, setCash] = useState('');
  const [cashless, setCashless] = useState('');
  const [deposit, setDeposit] = useState('');
  const [expense, setExpense] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => { store.getShift(id).then(setShift); }, [id]);

  // Автозаполнение: нал + безнал = выручка
  useEffect(() => {
    const nCash = Number(cash);
    const nCashless = Number(cashless);
    const nRevenue = Number(revenue);

    if (cash !== '' && cashless !== '' && revenue === '') {
      setRevenue(String(nCash + nCashless));
    } else if (revenue !== '' && cash !== '' && cashless === '') {
      setCashless(String(nRevenue - nCash));
    } else if (revenue !== '' && cashless !== '' && cash === '') {
      setCash(String(nRevenue - nCashless));
    }
  }, [cash, cashless, revenue]);

  if (!shift) return null;

  const calculated = Number(shift.startBalance) + Number(cash || 0) + Number(deposit || 0) - Number(expense || 0);
  const revenueMatch = Number(revenue || 0) === (Number(cash || 0) + Number(cashless || 0));

  const handleClose = async () => {
    if (!revenueMatch && Number(revenue) > 0) {
      if (!confirm('Выручка не равна сумме наличных и безнала. Продолжить?')) return;
    }
    await store.closeShift(id, { revenue, cash, cashless, deposit, expense, comment });
    navigate(`/shift/${id}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)' }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Закрытие смены</h1>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Начальный остаток</div>
        <div className="card-value">{shift.startBalance.toLocaleString('ru-RU')} ₽</div>
      </div>

      <div className="form-group"><label className="form-label">Выручка, ₽</label><input type="text" inputMode="decimal" className="form-input" value={revenue} onChange={e => setRevenue(e.target.value.replace(/[^0-9.,]/g, ''))} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Наличные, ₽</label><input type="text" inputMode="decimal" className="form-input" value={cash} onChange={e => setCash(e.target.value.replace(/[^0-9.,]/g, ''))} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Безналичные, ₽</label><input type="text" inputMode="decimal" className="form-input" value={cashless} onChange={e => setCashless(e.target.value.replace(/[^0-9.,]/g, ''))} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Внесение, ₽</label><input type="text" inputMode="decimal" className="form-input" value={deposit} onChange={e => setDeposit(e.target.value.replace(/[^0-9.,]/g, ''))} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Расход, ₽</label><input type="text" inputMode="decimal" className="form-input" value={expense} onChange={e => setExpense(e.target.value.replace(/[^0-9.,]/g, ''))} placeholder="0" /></div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Расчетный остаток</div>
        <div className="card-value">{calculated.toLocaleString('ru-RU')} ₽</div>
        {!revenueMatch && Number(revenue) > 0 && (
          <div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <AlertCircle size={14} /> Выручка ≠ Наличные + Безнал
          </div>
        )}
      </div>

      <div className="form-group"><label className="form-label">Комментарий</label><input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} /></div>

      <button className="btn btn-success" onClick={handleClose} style={{ marginBottom: 40 }}><Lock size={18} /> Подтвердить закрытие</button>
    </div>
  );
}
