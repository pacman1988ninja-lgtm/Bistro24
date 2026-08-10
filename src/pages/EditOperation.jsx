import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Save } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function EditOperation({ user }) {
  const { id, opId } = useParams();
  const navigate = useNavigate();
  const [op, setOp] = useState(null);
  const [refs, setRefs] = useState(null);
  const [amount, setAmount] = useState('');
  const [expenseTypeId, setExpenseTypeId] = useState('');
  const [paymentFormId, setPaymentFormId] = useState('');
  const [relatedId, setRelatedId] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);

  useEffect(() => {
    store.getReferences().then(setRefs);
    store.getOperation(opId).then(o => {
      if (!o || o.shiftId !== id) return navigate(-1);
      setOp(o);
      setAmount(String(o.amount));
      setExpenseTypeId(o.expenseTypeId || '');
      setPaymentFormId(o.paymentFormId || '');
      setRelatedId(o.contractorId || o.counterpartyId || o.employeeId || '');
      setComment(o.comment || '');
      setPhotoIds(o.photoIds || []);
    });
  }, [opId, id, navigate]);

  const handleSave = async () => {
    if (!amount || Number(amount) <= 0) return alert('Введите сумму');
    const payload = {
      amount: Number(amount),
      expenseTypeId,
      paymentFormId,
      comment,
      photoIds,
    };
    if (op.type === 'income') {
      payload.counterpartyId = relatedId;
    }
    await store.updateOperation(opId, payload, user.id);
    navigate(`/shift/${id}/operations`);
  };

  if (!op || !refs) return <div className="empty-state">Загрузка...</div>;

  const selectedExpenseType = refs.expenseTypes?.find(t => t.id === expenseTypeId);
  const expenseTypeName = selectedExpenseType?.name?.toLowerCase() || '';
  const showEmployees = expenseTypeName.includes('зарплата') || expenseTypeName.includes('заработная');
  const showContractors = expenseTypeName.includes('подрядчик');
  const showCounterparties = expenseTypeName.includes('поставщик') || expenseTypeName.includes('контрагент') || expenseTypeName.includes('аренд');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Изменение операции</h1>
      </div>

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--text-secondary)' }}>
          {op.type === 'income' ? 'Приход' : 'Расход'}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Сумма, ₽</label>
        <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} />
      </div>

      {op.type === 'expense' && (
        <div className="form-group">
          <label className="form-label">Статья расхода</label>
          <select className="form-select" value={expenseTypeId} onChange={e => { setExpenseTypeId(e.target.value); setRelatedId(''); }}>
            <option value="">Выберите...</option>
            {refs.expenseTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {op.type === 'income' && (
        <div className="form-group">
          <label className="form-label">Источник</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите источник...</option>
            {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            {refs.contractors?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showEmployees && (
        <div className="form-group">
          <label className="form-label">Сотрудник</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите...</option>
            {refs.employees?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showContractors && (
        <div className="form-group">
          <label className="form-label">Подрядчик</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите...</option>
            {refs.contractors?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showCounterparties && (
        <div className="form-group">
          <label className="form-label">Контрагент</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите...</option>
            {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Форма оплаты</label>
        <select className="form-select" value={paymentFormId} onChange={e => setPaymentFormId(e.target.value)}>
          {refs.paymentForms?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-success" onClick={handleSave} style={{ marginTop: 16, marginBottom: 40 }}><Save size={18} /> Сохранить изменения</button>
    </div>
  );
}
