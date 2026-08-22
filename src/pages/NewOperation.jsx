const toLocalInput = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().slice(0, 16);
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, nowISO, toNum } from '../store';
import { ArrowLeft } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function NewOperation({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [refs, setRefs] = useState(null);
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(toLocalInput());
  const [expenseTypeId, setExpenseTypeId] = useState('');
  const [paymentFormId, setPaymentFormId] = useState('');
  const [relatedId, setRelatedId] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [shift, setShift] = useState(null);

  useEffect(() => {
    if (id && id !== 'new') {
      store.getShift(id).then(s => setShift(s));
    }
  }, [id]);

  useEffect(() => {
    store.getReferences().then(r => {
      setRefs(r);
      if (!isStandalone) {
        const cashForm = r.paymentForms?.find(t => t.active && t.name === 'Наличные');
        if (cashForm) setPaymentFormId(cashForm.id);
      }
    });
  }, []);

  const selectedExpenseType = refs?.expenseTypes?.find(t => t.id === expenseTypeId);
  const linkedRef = selectedExpenseType?.linkedRef;
  const filterRoles = selectedExpenseType?.filterRoles;

  const handleSubmit = async () => {
    const n = toNum(amount);
    if (!Number.isFinite(n) || n <= 0) return alert('Введите корректную сумму');
    if (shift && date && new Date(date) < new Date(shift.openDate)) {
      return alert('Дата операции не может быть раньше даты открытия смены');
    }
    if (isStandalone && !paymentFormId) return alert('Выберите форму оплаты');

    if (type === 'expense') {
      if (!expenseTypeId) return alert('Выберите статью расхода');
      if (linkedRef && !relatedId) {
        return alert('Заполните связанный справочник для выбранной статьи расхода');
      }
    }
    if (type === 'income' && !sourceId) {
      return alert('Выберите источник поступления');
    }

    const payload = {
      shiftId: isStandalone ? null : id,
      amount: n,
      type,
      date: date ? new Date(date).toISOString() : nowISO(),
      expenseTypeId: type === 'expense' ? expenseTypeId : null,
      paymentFormId,
      employeeId: user.id,
      comment,
      photoIds,
    };

    if (type === 'income') {
      payload.sourceId = sourceId;
    }
    if (linkedRef === 'employees' && relatedId) payload.employeeId = relatedId;
    if (linkedRef === 'contractors' && relatedId) payload.contractorId = relatedId;
    if (linkedRef === 'counterparties' && relatedId) payload.counterpartyId = relatedId;

    await store.addOperation(payload, user.id);
    if (isStandalone) navigate('/operations');
    else navigate(`/shift/${id}/operations`);
  };

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
  const showLinked = type === 'expense' && linkedRef && linkedItems.length > 0;
  const linkedLabel = linkedRef === 'employees' ? 'Сотрудник' : linkedRef === 'contractors' ? 'Подрядчик' : linkedRef === 'counterparties' ? 'Контрагент' : 'Связанный';
  const isStandalone = !id || id === 'new';

  if (!refs) return <div className="empty-state">Загрузка...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Новая операция{isStandalone ? ' (вне смены)' : ''}</h1>
      </div>

      <div className="form-group">
        <label className="form-label">Дата и время</label>
        <input type="datetime-local" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className={'btn ' + (type === 'income' ? 'btn-success' : 'btn-secondary')} onClick={() => { setType('income'); setExpenseTypeId(''); setRelatedId(''); }} style={{ flex: 1 }}>Внесение</button>
          <button className={'btn ' + (type === 'expense' ? 'btn-danger' : 'btn-secondary')} onClick={() => { setType('expense'); setRelatedId(''); setSourceId(''); }} style={{ flex: 1 }}>Расход</button>
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

      {type === 'income' && (
        <div className="form-group">
          <label className="form-label">Источник поступления</label>
          <select className="form-select" value={sourceId} onChange={e => setSourceId(e.target.value)}>
            <option value="">Выберите источник...</option>
            {refs.incomeSources?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {(!refs.incomeSources || refs.incomeSources.filter(t => t.active).length === 0) && (
            <p style={{ fontSize: 12, color: 'var(--warning)', marginTop: 6 }}>
              Справочник источников поступлений пуст. Добавьте записи в Настройки → Справочники → Источники поступлений.
            </p>
          )}
        </div>
      )}

      {isStandalone && (
        <div className="form-group">
          <label className="form-label">Форма оплаты</label>
          <select className="form-select" value={paymentFormId} onChange={e => setPaymentFormId(e.target.value)}>
            <option value="">Выберите форму оплаты...</option>
            {refs.paymentForms?.filter(t => t.active && t.name !== 'Наличные').map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Комментарий</label>
        <input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} placeholder="Необязательно" />
      </div>

      <PhotoCapture photoIds={photoIds} onChange={setPhotoIds} />

      <button className="btn btn-primary" onClick={handleSubmit} style={{ marginTop: 16, marginBottom: 40 }}>Сохранить операцию</button>
    </div>
  );
}
