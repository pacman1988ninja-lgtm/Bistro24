import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Save, AlertCircle, Calculator } from 'lucide-react';

export default function EditShift({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [opsExpense, setOpsExpense] = useState(0);
  const [opsIncome, setOpsIncome] = useState(0);
  const [revenue, setRevenue] = useState('');
  const [cash, setCash] = useState('');
  const [cashless, setCashless] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    store.getShift(id).then(async s => {
      if (!s || s.status !== 'Закрыта') return navigate('/');
      if (!store.canEditShift(s, user)) return navigate('/');
      const ops = await store.getOperationsByShift(id);
      const refs = await store.getReferences();
      const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
      const expTotal = ops.filter(o => o.type === 'expense').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      const incTotal = ops.filter(o => o.type === 'income').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      setShift(s);
      setOpsExpense(expTotal);
      setOpsIncome(incTotal);
      setRevenue(String(s.revenue || 0));
      setCash(String(s.cash || 0));
      setCashless(String(s.cashless || 0));
      setComment(s.comment || '');
    });
  }, [id, user, navigate]);

  if (!shift) return null;

  const calculated = Number(shift.startBalance) + Number(cash || 0) + opsIncome - opsExpense;
  const revenueMatch = Number(revenue || 0) === (Number(cash || 0) + Number(cashless || 0));

  const handleCalc = () => {
    const nRev = Number(revenue);
    const nCash = Number(cash);
    const nCashless = Number(cashless);
    if (cash !== '' && cashless !== '') setRevenue(String(nCash + nCashless));
    else if (revenue !== '' && cash !== '') setCashless(String(nRev - nCash));
    else if (revenue !== '' && cashless !== '') setCash(String(nRev - nCashless));
    else alert('Заполните хотя бы два поля');
  };

  const handleSave = async () => {
    if (!revenueMatch && Number(revenue) > 0) {
      if (!confirm('Выручка не равна сумме наличных и безнала. Продолжить?')) return;
    }
    await store.updateShift(id, { revenue, cash, cashless, deposit: opsIncome, comment }, user.id);
    navigate(`/shift/${id}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Изменение смены #{shift.id.slice(-4)}</h1>
      </div>

      <div className="card" style={{ marginBottom: 16, background: 'rgba(255,152,0,0.1)', border: '1px solid var(--warning)' }}>
        <div style={{ fontSize: 13, color: 'var(--warning)' }}>
          Редактирование доступно до: {new Date(shift.editDeadline).toLocaleString('ru-RU')}
        </div>
      </div>

      <div className="form-group"><label className="form-label">Выручка, ₽</label><input type="tel" inputMode="decimal" className="form-input" value={revenue} onChange={e => setRevenue(e.target.value)} /></div>
      <div className="form-group"><label className="form-label">Наличные, ₽</label><input type="tel" inputMode="decimal" className="form-input" value={cash} onChange={e => setCash(e.target.value)} /></div>
      <div className="form-group"><label className="form-label">Безналичные, ₽</label><input type="tel" inputMode="decimal" className="form-input" value={cashless} onChange={e => setCashless(e.target.value)} /></div>
      <button className="btn btn-secondary" onClick={handleCalc} style={{ marginBottom: 16 }}>Рассчитать</button>

      <div className="form-group">
        <label className="form-label">Приход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--success)' }}>
          +{opsIncome.toLocaleString('ru-RU')} ₽ (по операциям)
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Расход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--danger)' }}>
          -{opsExpense.toLocaleString('ru-RU')} ₽ (по операциям)
        </div>
      </div>

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

      <button className="btn btn-success" onClick={handleSave} style={{ marginBottom: 40 }}><Save size={18} /> Сохранить изменения</button>
    </div>
  );
}
