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
    store.getReferences().then(r => setRefs(r));
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

    if (op.type === 'expense') {
      if (!expenseTypeId) return alert('Выберите статью расхода');
      const et = refs.expenseTypes?.find(t => t.id === expenseTypeId);
      if (et?.linkedRef && !relatedId) {
        return alert('Заполните связанный справочник для выбранной статьи расхода');
      }
    }
    if (op.type === 'income' && !relatedId) {
      return alert('Выберите источник поступления');
    }

    const payload = {
      amount: Number(amount),
      expenseTypeId,
      paymentFormId,
      comment,
      photoIds,
    };
    if (op.type === 'income') {
      const isContractor = refs.contractors?.some(c => c.id === relatedId);
      if (isContractor) {
        payload.contractorId = relatedId;
      } else {
        payload.counterpartyId = relatedId;
      }
    }
    await store.updateOperation(opId, payload, user.id);
    navigate(`/shift/${id}/operations`);
  };

  if (!op || !refs) return <div className="empty-state">Загрузка...</div>;

  const selectedExpenseType = refs.expenseTypes?.find(t => t.id === expenseTypeId);
  const linkedRef = selectedExpenseType?.linkedRef;
  const filterRoles = selectedExpenseType?.filterRoles;

  const getLinkedItems = () => {
    if (!linkedRef || !refs) return [];
    let items = refs[linkedRef]?.filter(t => t.active) || [];
    if (filterRoles && filterRoles.length > 0) {
      items = items.filter(i => filterRoles.includes(i.role));
    }
    // Заработная плата — только seller и manager, без owner
    if (linkedRef === 'employees' && selectedExpenseType?.name?.toLowerCase().includes('заработная')) {
      items = items.filter(i => i.role === 'seller' || i.role === 'manager');
    }
    return items;
  };

  const linkedItems = getLinkedItems();
  const showLinked = op.type === 'expense' && linkedRef && linkedItems.length > 0;
  const linkedLabel = linkedRef === 'employees' ? 'Сотрудник' : linkedRef === 'contractors' ? 'Подрядчик' : linkedRef === 'counterparties' ? 'Контрагент' : 'Связанный';

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
            <option value="">Выберите статью...</option>
            {refs.expenseTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      {showLinked && (
        <div className="form-group">
          <label className="form-label">{linkedLabel}</label>
          <select className="form-select" value={relatedId} onChange={e => setRelatedId(e.target.value)}>
            <option value="">Выберите {linkedLabel.toLowerCase()}...</option>
            {linkedItems.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
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
