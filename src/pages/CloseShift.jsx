import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, AlertCircle, Lock, Calculator } from 'lucide-react';

export default function CloseShift({ user }) {
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
    store.getShift(id).then(s => {
      // Закрывать можно только открытую смену (защита от повторного закрытия по прямой ссылке)
      if (!s || s.status !== 'Открыта') return navigate('/');
      setShift(s);
    });
    store.getOperationsByShift(id).then(async ops => {
      const refs = await store.getReferences();
      const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
      const expTotal = ops
        .filter(o => o.type === 'expense')
        .filter(o => o.paymentFormId === cashFormId)
        .reduce((s, o) => s + o.amount, 0);
      const incTotal = ops
        .filter(o => o.type === 'income')
        .filter(o => o.paymentFormId === cashFormId)
        .reduce((s, o) => s + o.amount, 0);
      setOpsExpense(expTotal);
      setOpsIncome(incTotal);
    });
  }, [id, navigate]);

  if (!shift) return null;

  const calculated = Number(shift.startBalance) + Number(cash || 0) + opsIncome - opsExpense;
  const revenueMatch = Number(revenue || 0) === (Number(cash || 0) + Number(cashless || 0));

  const handleCalc = () => {
    const nRev = Number(revenue);
    const nCash = Number(cash);
    const nCashless = Number(cashless);
    if (cash !== '' && cashless !== '') {
      setRevenue(String(nCash + nCashless));
    } else if (revenue !== '' && cash !== '') {
      setCashless(String(nRev - nCash));
    } else if (revenue !== '' && cashless !== '') {
      setCash(String(nRev - nCashless));
    } else {
      alert('Заполните хотя бы два поля');
    }
  };

  const handleClose = async () => {
    if (!revenueMatch && Number(revenue) > 0) {
      if (!confirm('Выручка не равна сумме наличных и безнала. Продолжить?')) return;
    }
    await store.closeShift(id, { revenue, cash, cashless, deposit: opsIncome, expense: opsExpense, comment }, user.id);
    navigate(`/shift/${id}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 22 }}>Закрытие смены</h1>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Начальный остаток</div>
        <div className="card-value">{shift.startBalance.toLocaleString('ru-RU')} ₽</div>
      </div>

      <div className="form-group"><label className="form-label">Выручка, ₽</label><input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Наличные, ₽</label><input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={cash} onChange={e => setCash(e.target.value)} placeholder="0" /></div>
      <div className="form-group"><label className="form-label">Безналичные (эквайринг), ₽</label><input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={cashless} onChange={e => setCashless(e.target.value)} placeholder="0" /><p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>Не участвует в остатке кассы</p></div>

      <button className="btn btn-secondary" onClick={handleCalc} style={{ marginBottom: 16 }}><Calculator size={18} /> Рассчитать</button>

      <div className="form-group">
        <label className="form-label">Приход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>+{opsIncome.toLocaleString('ru-RU')} ₽</span>
          <span style={{ fontSize: 12 }}>по операциям</span>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Расход (наличные операции), ₽</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>-{opsExpense.toLocaleString('ru-RU')} ₽</span>
          <span style={{ fontSize: 12 }}>по операциям</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Расчетный остаток</div>
        <div className="card-value">{calculated.toLocaleString('ru-RU')} ₽</div>
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>
          {shift.startBalance.toLocaleString('ru-RU')} + {Number(cash || 0).toLocaleString('ru-RU')} + {opsIncome.toLocaleString('ru-RU')} − {opsExpense.toLocaleString('ru-RU')}
        </p>
        {!revenueMatch && Number(revenue) > 0 && (<div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}><AlertCircle size={14} /> Выручка ≠ Наличные + Безнал</div>)}
      </div>

      <div className="form-group"><label className="form-label">Комментарий</label><input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} /></div>

      <button className="btn btn-success" onClick={handleClose} style={{ marginBottom: 40 }}><Lock size={18} /> Подтвердить закрытие</button>
    </div>
  );
}
