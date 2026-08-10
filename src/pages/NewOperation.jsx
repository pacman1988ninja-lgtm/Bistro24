import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function NewOperation({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [refs, setRefs] = useState(null);
  const [users, setUsers] = useState([]);
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [expenseTypeId, setExpenseTypeId] = useState('');
  const [paymentFormId, setPaymentFormId] = useState('');
  const [relatedId, setRelatedId] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);

  useEffect(() => {
    store.getReferences().then(setRefs);
    store.getUsers().then(setUsers);
  }, []);

  const selectedExpenseType = refs?.expenseTypes?.find(t => t.id === expenseTypeId);
  const expenseTypeName = selectedExpenseType?.name?.toLowerCase() || '';

  const showEmployees = expenseTypeName.includes('зарплата') || expenseTypeName.includes('заработная');
  const showContractors = expenseTypeName.includes('подрядчик');
  const showCounterparties = expenseTypeName.includes('поставщик') || expenseTypeName.includes('контрагент') || expenseTypeName.includes('аренд');

  const handleSubmit = async () => {
    if (!amount || Number(amount) <= 0) return alert('Введите сумму');
    if (!paymentFormId) return alert('Выберите форму оплаты');

    const payload = {
      shiftId: id, amount: Number(amount), type,
      expenseTypeId: type === 'expense' ? expenseTypeId : null,
      paymentFormId, employeeId: user.id, comment, photoIds,
    };

    if (showEmployees && relatedId) payload.employeeId = relatedId;
    if (showContractors && relatedId) payload.contractorId = relatedId;
    if (showCounterparties && relatedId) payload.counterpartyId = relatedId;

    await store.addOperation(payload, user.id);
    navigate(`/shift/${id}/operations`);
  };

  if (!refs) return <div className="empty-state">Загрузка...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Новая операция</h1>
      </div>

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className={'btn ' + (type === 'income' ? 'btn-success' : 'btn-secondary')} onClick={() => setType('income')} style={{ flex: 1 }}>Приход</button>
          <button className={'btn ' + (type === 'expense' ? 'btn-danger' : 'btn-secondary')} onClick={() => setType('expense')} style={{ flex: 1 }}>Расход</button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Сумма, ₽</label>
        <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0" />
      </div>

      {type === 'expense' && (
        <div className="form-group">
          <label className="form-label">Статья расхода</label>
          <select className="form-select" value={expenseTypeId} onChange={e => { setExpenseTypeId(e.target.value); setRelatedId(''); }}>
            <option value="">Выберите...</option>
            {refs.expenseTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showEmployees && (
        <div className="form-group">
          <label className="form-label">Сотрудник</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите сотрудника...</option>
            {users.filter(u => u.active).map(u => <option key={u.id} value={u.id}>{u.fullName}</option>)}
          </select>
        </div>
      )}

      {showContractors && (
        <div className="form-group">
          <label className="form-label">Подрядчик</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите подрядчика...</option>
            {refs.contractors?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showCounterparties && (
        <div className="form-group">
          <label className="form-label">Контрагент</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите контрагента...</option>
            {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Форма оплаты</label>
        <select className="form-select" value={paymentFormId} onChange={e => setPaymentFormId(e.target.value)}>
          <option value="">Выберите...</option>
          {refs.paymentForms?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} placeholder="Необязательно" />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-primary" onClick={handleSubmit} style={{ marginTop: 16, marginBottom: 40 }}>Сохранить операцию</button>
    </div>
  );
}
