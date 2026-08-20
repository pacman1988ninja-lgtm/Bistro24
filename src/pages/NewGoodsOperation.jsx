import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft } from 'lucide-react';
import PhotoCapture from '../components/PhotoCapture';

export default function NewGoodsOperation({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [refs, setRefs] = useState(null);
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [counterpartyId, setCounterpartyId] = useState('');
  const [writeOffTypeId, setWriteOffTypeId] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 16));
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);

  useEffect(() => {
    store.getReferences().then(r => setRefs(r));
  }, []);

  const handleSubmit = async () => {
    if (!amount || Number(amount) <= 0) return alert('Введите сумму');
    if (!date) return alert('Укажите дату');

    if (type === 'income') {
      if (!counterpartyId) return alert('Выберите контрагента');
    }
    if (type === 'expense') {
      if (!writeOffTypeId) return alert('Выберите статью списания');
    }

    const payload = {
      shiftId: id || null,
      amount: Number(amount),
      type,
      category: 'goods',
      counterpartyId: type === 'income' ? counterpartyId : null,
      writeOffTypeId: type === 'expense' ? writeOffTypeId : null,
      employeeId: user.id,
      date: new Date(date).toISOString(),
      comment,
      photoIds,
    };

    await store.addOperation(payload, user.id);
    if (id) {
      navigate(`/shift/${id}`);
    } else {
      navigate('/operations');
    }
  };

  if (!refs) return <div className="empty-state">Загрузка...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>{id ? 'Товарная операция' : 'Товарная операция (вне смены)'}</h1>
      </div>

      <div className="form-group">
        <label className="form-label">Тип</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className={'btn ' + (type === 'income' ? 'btn-success' : 'btn-secondary')} onClick={() => { setType('income'); setWriteOffTypeId(''); }} style={{ flex: 1 }}>Приход</button>
          <button className={'btn ' + (type === 'expense' ? 'btn-danger' : 'btn-secondary')} onClick={() => setType('expense')} style={{ flex: 1 }}>Списание</button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Дата и время</label>
        <input type="datetime-local" className="form-input" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Сумма, ₽</label>
        <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0" />
      </div>

      {type === 'expense' && (
        <div className="form-group">
          <label className="form-label">Статья списания</label>
          <select className="form-select" value={writeOffTypeId} onChange={e => setWriteOffTypeId(e.target.value)}>
            <option value="">Выберите статью...</option>
            {refs.writeOffTypes?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {(!refs.writeOffTypes || refs.writeOffTypes.filter(t => t.active).length === 0) && (
            <p style={{ fontSize: 12, color: 'var(--warning)', marginTop: 6 }}>
              Справочник статей списания пуст. Добавьте записи в Настройки → Справочники → Статьи списания.
            </p>
          )}
        </div>
      )}

      {type === 'income' && (
        <div className="form-group">
          <label className="form-label">Контрагент</label>
          <select className="form-select" value={counterpartyId} onChange={e => setCounterpartyId(e.target.value)}>
            <option value="">Выберите контрагента...</option>
            {refs.counterparties?.filter(t => t.active).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {(!refs.counterparties || refs.counterparties.filter(t => t.active).length === 0) && (
            <p style={{ fontSize: 12, color: 'var(--warning)', marginTop: 6 }}>
              Справочник контрагентов пуст. Добавьте записи в Настройки → Справочники → Контрагенты.
            </p>
          )}
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
