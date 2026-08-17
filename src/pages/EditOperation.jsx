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
  const [writeOffTypeId, setWriteOffTypeId] = useState('');
  const [counterpartyId, setCounterpartyId] = useState('');
  const [paymentFormId, setPaymentFormId] = useState('');
  const [relatedId, setRelatedId] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    store.getReferences().then(r => setRefs(r));
    store.getOperation(opId).then(o => {
      if (!o) return navigate(-1);
      if (o.shiftId && o.shiftId !== id) return navigate(-1);
      setOp(o);
      setAmount(String(o.amount));
      setExpenseTypeId(o.expenseTypeId || '');
      setWriteOffTypeId(o.writeOffTypeId || '');
      setCounterpartyId(o.counterpartyId || '');
      setPaymentFormId(o.paymentFormId || '');
      setRelatedId(o.contractorId || o.counterpartyId || o.employeeId || '');
      setSourceId(o.sourceId || o.counterpartyId || o.contractorId || '');
      setComment(o.comment || '');
      setPhotoIds(o.photoIds || []);
      setDate(o.date ? o.date.slice(0, 16) : '');
    });
  }, [opId, id, navigate]);

  const handleSave = async () => {
    if (!amount || Number(amount) <= 0) return alert('Введите сумму');

    if (op.category === 'goods') {
      if (!date) return alert('Укажите дату');
      if (op.type === 'expense' && !writeOffTypeId) return alert('Выберите статью списания');
      if (!counterpartyId) return alert('Выберите контрагента');

      const payload = {
        amount: Number(amount),
        date: new Date(date).toISOString(),
        writeOffTypeId: op.type === 'expense' ? writeOffTypeId : null,
        counterpartyId,
        comment,
        photoIds,
      };
      await store.updateOperation(opId, payload, user.id);
      navigate(id ? `/shift/${id}/operations` : '/operations');
      return;
    }

    if (op.type === 'expense') {
      if (!expenseTypeId) return alert('Выберите статью расхода');
      const et = refs.expenseTypes?.find(t => t.id === expenseTypeId);
      if (et?.linkedRef && !relatedId) {
        return alert('Заполните связанный справочник для выбранной статьи расхода');
      }
    }
    if (op.type === 'income' && !sourceId) {
      return alert('Выберите источник поступления');
    }

    const payload = {
      amount: Number(amount),
      expenseTypeId,
      paymentFormId,
      comment,
      photoIds,
    };
    if (op.type === 'expense') {
      if (linkedRef === 'employees') payload.employeeId = relatedId;
      if (linkedRef === 'contractors') payload.contractorId = relatedId;
      if (linkedRef === 'counterparties') payload.counterpartyId = relatedId;
    }
    if (op.type === 'income') {
      payload.sourceId = sourceId;
      payload.counterpartyId = null;
      payload.contractorId = null;
      payload.employeeId = null;
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
    if (linkedRef === 'employees' && selectedExpenseType?.name?.toLowerCase().includes('заработная')) {
      items = items.filter(i => i.role === 'seller' || i.role === 'manager');
    }
    return items;
  };

  const linkedItems = getLinkedItems();
  const showLinked = op.type === 'expense' && linkedRef && linkedItems.length > 0;
  const linkedLabel = linkedRef === 'employees' ? 'Сотрудник' : linkedRef === 'contractors' ? 'Подрядчик' : linkedRef === 'counterparties' ? 'Контрагент' : 'Связанный';

  const isGoods = op.category === 'goods';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Изменение операции</h1>
      </div>

      {isGoods && (
        <div className="form-group">
          <label className="form-label">Категория</label>
          <div className="form-input" style={{ background: 'var(--surface)', color: 'var(--success)' }}>Товарная операция</div>
        </div>
      )}

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

      {isGoods ? (
        <>
          <div className="form-group">
            <label className="form-label">Дата и время</label>
            <input type="datetime-local" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          {op.type === 'expense' && (
            <div className="form-group">
              <label className="form-label">Статья списания</label>
              <select className="form-select" value={writeOffTypeId} onChange={e => setWriteOffTypeId(e.target.value)}>
                <option value="">Выберите статью...</option>
                {refs.writeOffTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Контрагент</label>
            <select className="form-select" value={counterpartyId} onChange={e => setCounterpartyId(e.target.value)}>
              <option value="">Выберите контрагента...</option>
              {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>
        </>
      ) : (
        <>
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
              <label className="form-label">Источник поступления</label>
              <select className="form-select" value={sourceId} onChange={e => setSourceId(e.target.value)}>
                <option value="">Выберите источник...</option>
                {refs.incomeSources?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Форма оплаты</label>
            <select className="form-select" value={paymentFormId} onChange={e => setPaymentFormId(e.target.value)}>
              {refs.paymentForms?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>
        </>
      )}

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-success" onClick={handleSave} style={{ marginTop: 16, marginBottom: 40 }}><Save size={18} /> Сохранить изменения</button>
    </div>
  );
}
