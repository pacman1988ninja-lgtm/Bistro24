import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Camera, Image as ImageIcon, Edit3, Trash2 } from 'lucide-react';
import { store } from '../store';

export default function Settlements({ user }) {
  const navigate = useNavigate();
  const [refs, setRefs] = useState({});
  const [ops, setOps] = useState([]);
  const [entityType, setEntityType] = useState('counterparties');
  const [selectedId, setSelectedId] = useState('');

  // Create adjustment modal
  const [showAdjustModal, setShowAdjustModal] = useState(false);
  const [adjustDate, setAdjustDate] = useState(new Date().toISOString().slice(0, 16));
  const [adjustTargetBalance, setAdjustTargetBalance] = useState('');
  const [adjustComment, setAdjustComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [photos, setPhotos] = useState({});

  // Edit adjustment modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editOp, setEditOp] = useState(null);
  const [editDate, setEditDate] = useState('');
  const [editTargetBalance, setEditTargetBalance] = useState('');
  const [editComment, setEditComment] = useState('');
  const [editPhotoIds, setEditPhotoIds] = useState([]);
  const [editPhotos, setEditPhotos] = useState({});

  useEffect(() => {
    if (user?.role === 'seller') {
      navigate('/');
      return;
    }
    load();
  }, []);

  const load = async () => {
    const r = await store.getReferences();
    const o = await store.getAllOperations();
    setRefs(r);
    setOps(o);
  };

  const entityOptions = [
    { key: 'counterparties', label: 'Контрагенты' },
    { key: 'contractors', label: 'Подрядчики' },
  ];

  const items = refs[entityType]?.filter(t => t.active) || [];

  const getBalance = (id, excludeOpId) => {
    const entityOps = ops.filter(op => {
      if (op.id === excludeOpId) return false;
      if (entityType === 'counterparties') return op.counterpartyId === id;
      return op.contractorId === id;
    });
    let debt = 0;
    for (const op of entityOps) {
      if (op.category === 'goods' && op.type === 'income') {
        debt += op.amount;
      } else if (op.category === 'adjustment') {
        debt += op.type === 'income' ? op.amount : -op.amount;
      } else if (op.type === 'expense' && (op.counterpartyId === id || op.contractorId === id)) {
        debt -= op.amount;
      }
    }
    return debt;
  };

  const getBalanceOnDate = (id, dateStr, excludeOpId) => {
    const cutoff = new Date(dateStr).getTime();
    const entityOps = ops.filter(op => {
      if (op.id === excludeOpId) return false;
      if (new Date(op.date).getTime() > cutoff) return false;
      if (entityType === 'counterparties') return op.counterpartyId === id;
      return op.contractorId === id;
    });
    let debt = 0;
    for (const op of entityOps) {
      if (op.category === 'goods' && op.type === 'income') {
        debt += op.amount;
      } else if (op.category === 'adjustment') {
        debt += op.type === 'income' ? op.amount : -op.amount;
      } else if (op.type === 'expense' && (op.counterpartyId === id || op.contractorId === id)) {
        debt -= op.amount;
      }
    }
    return debt;
  };

  const itemsWithBalance = items
    .map(item => ({ ...item, balance: getBalance(item.id) }))
    .filter(item => item.balance !== 0)
    .sort((a, b) => b.balance - a.balance);

  const totalDebt = itemsWithBalance.reduce((sum, item) => sum + item.balance, 0);
  const selectedItem = selectedId ? itemsWithBalance.find(i => i.id === selectedId) : null;

  // Get operations for selected entity, sorted by date ascending for running balance
  const selectedOpsRaw = selectedId
    ? ops.filter(op => {
        if (entityType === 'counterparties') return op.counterpartyId === selectedId;
        return op.contractorId === selectedId;
      })
    : [];

  // Calculate running balance (oldest first)
  const selectedOpsWithBalance = selectedOpsRaw
    .slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(op => {
      let change = 0;
      if (op.category === 'goods' && op.type === 'income') change = op.amount;
      else if (op.category === 'adjustment') change = op.type === 'income' ? op.amount : -op.amount;
      else if (op.type === 'expense') change = -op.amount;
      return { ...op, change };
    });

  let running = 0;
  for (const op of selectedOpsWithBalance) {
    running += op.change;
    op.runningBalance = running;
  }

  // Reverse for display (newest first)
  const selectedOps = selectedOpsWithBalance.reverse();

  const getName = (list, id) => refs[list]?.find(t => t.id === id)?.name || '';
  const getUserName = (id) => refs.employees?.find(e => e.id === id)?.name || refs.users?.find(u => u.id === id)?.fullName || '—';

  const handleCamera = async (isEdit = false) => {
    try {
      const photo = await store.takePhoto();
      if (photo) {
        if (isEdit) {
          setEditPhotoIds(prev => [...prev, photo.id]);
          setEditPhotos(prev => ({ ...prev, [photo.id]: photo.base64 }));
        } else {
          setPhotoIds(prev => [...prev, photo.id]);
          setPhotos(prev => ({ ...prev, [photo.id]: photo.base64 }));
        }
      }
    } catch (e) { alert('Ошибка камеры: ' + e.message); }
  };

  const handleGallery = async (isEdit = false) => {
    try {
      const photo = await store.pickPhoto();
      if (photo) {
        if (isEdit) {
          setEditPhotoIds(prev => [...prev, photo.id]);
          setEditPhotos(prev => ({ ...prev, [photo.id]: photo.base64 }));
        } else {
          setPhotoIds(prev => [...prev, photo.id]);
          setPhotos(prev => ({ ...prev, [photo.id]: photo.base64 }));
        }
      }
    } catch (e) { alert('Ошибка галереи: ' + e.message); }
  };

  const handleAdjust = async () => {
    if (adjustTargetBalance === '') return alert('Введите новое сальдо');
    const currentBalance = getBalanceOnDate(selectedId, adjustDate);
    const target = Number(adjustTargetBalance);
    const diff = target - currentBalance;
    if (diff === 0) return alert('Новое сальдо равно текущему');

    const payload = {
      type: diff > 0 ? 'income' : 'expense',
      amount: Math.abs(diff),
      date: new Date(adjustDate).toISOString(),
      category: 'adjustment',
      comment: adjustComment || '',
      shiftId: null,
      employeeId: user.id,
      paymentFormId: '',
      expenseTypeId: '',
      counterpartyId: entityType === 'counterparties' ? selectedId : '',
      contractorId: entityType === 'contractors' ? selectedId : '',
      photoIds,
      targetBalance: target,
    };
    await store.addOperation(payload, user.id);
    setShowAdjustModal(false);
    setAdjustTargetBalance('');
    setAdjustComment('');
    setPhotoIds([]);
    setPhotos({});
    load();
  };

  const handleDeleteOp = async (opId) => {
    if (!confirm('Удалить операцию?')) return;
    await store.deleteOperation(opId, user.id);
    load();
  };

  const openEditModal = (op) => {
    setEditOp(op);
    setEditDate(new Date(op.date).toISOString().slice(0, 16));
    setEditTargetBalance(op.targetBalance !== undefined ? String(op.targetBalance) : '');
    setEditComment(op.comment || '');
    setEditPhotoIds(op.photoIds || []);
    const p = {};
    (op.photoIds || []).forEach(pid => {
      if (photos[pid]) p[pid] = photos[pid];
    });
    setEditPhotos(p);
    setShowEditModal(true);
  };

  const handleEditAdjust = async () => {
    if (editTargetBalance === '') return alert('Введите новое сальдо');
    const target = Number(editTargetBalance);
    const currentBalance = getBalanceOnDate(selectedId, editDate, editOp.id);
    const diff = target - currentBalance;
    if (diff === 0) return alert('Новое сальдо равно текущему');

    const payload = {
      type: diff > 0 ? 'income' : 'expense',
      amount: Math.abs(diff),
      date: new Date(editDate).toISOString(),
      category: 'adjustment',
      comment: editComment || '',
      shiftId: null,
      employeeId: user.id,
      paymentFormId: '',
      expenseTypeId: '',
      counterpartyId: entityType === 'counterparties' ? selectedId : '',
      contractorId: entityType === 'contractors' ? selectedId : '',
      photoIds: editPhotoIds,
      targetBalance: target,
    };
    await store.updateOperation(editOp.id, payload, user.id);
    setShowEditModal(false);
    setEditOp(null);
    load();
  };

  return (
    <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Тип</label>
          <select className="form-select" value={entityType} onChange={e => { setEntityType(e.target.value); setSelectedId(''); }}>
            {entityOptions.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">{entityType === 'counterparties' ? 'Контрагент' : 'Подрядчик'}</label>
          <select className="form-select" value={selectedId} onChange={e => setSelectedId(e.target.value)}>
            <option value="">Все {entityType === 'counterparties' ? 'контрагенты' : 'подрядчики'}</option>
            {items.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Задолженность</span>
          <span style={{ fontSize: 24, fontWeight: 700, color: selectedItem ? (selectedItem.balance > 0 ? 'var(--danger)' : 'var(--success)') : (totalDebt > 0 ? 'var(--danger)' : 'var(--success)') }}>
            {selectedItem ? selectedItem.balance.toLocaleString('ru-RU') : totalDebt.toLocaleString('ru-RU')} ₽
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: selectedId ? 12 : 0 }}>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Просрочено</span>
          <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--warning)' }}>0 ₽</span>
        </div>
        {selectedId && (
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setSelectedId('')}
              style={{ flex: 1, background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: '8px 0', color: 'var(--text)', fontSize: 13, cursor: 'pointer' }}
            >
              Назад
            </button>
            <button className="btn btn-secondary" onClick={() => setShowAdjustModal(true)} style={{ flex: 1, fontSize: 13 }}>
              Корректировка
            </button>
          </div>
        )}
      </div>

      {selectedId && selectedOps.length === 0 && (
        <div className="empty-state">Нет операций</div>
      )}

      {selectedId && selectedOps.map((op, idx) => (
        <div key={op.id}>
          <div className="card" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
                  {op.category === 'adjustment'
                    ? 'Корректировка сальдо'
                    : op.category === 'goods'
                      ? (op.type === 'income' ? 'Товарный приход' : 'Товарное списание')
                      : (getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Внесение' : 'Расход'))}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                  {new Date(op.date).toLocaleString('ru-RU')} • {getName('paymentForms', op.paymentFormId) || '—'}
                </p>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                  {getUserName(op.employeeId)}
                </p>
                {op.comment && op.comment !== 'Корректировка сальдо' && <p style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>{op.comment}</p>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                {op.category === 'adjustment' && op.targetBalance !== undefined && (
                  <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                    Сальдо: {op.targetBalance.toLocaleString('ru-RU')} ₽
                  </span>
                )}
                <span style={{ fontSize: 18, fontWeight: 700, color: op.type === 'income' ? 'var(--success)' : 'var(--danger)' }}>
                  {op.type === 'income' ? '+' : '-'}{op.amount.toLocaleString('ru-RU')} ₽
                </span>
                {op.category === 'adjustment' && (
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={() => openEditModal(op)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 6, color: 'var(--text)' }}>
                      <Edit3 size={14} />
                    </button>
                    <button onClick={() => handleDeleteOp(op.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 6, color: '#fff' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {op.photoIds?.length > 0 && (
              <div className="photo-grid" style={{ marginTop: 12 }}>
                {op.photoIds.map(pid => (
                  <img key={pid} src={photos[pid] || editPhotos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
                ))}
              </div>
            )}
          </div>

          {/* Сальдо ДО операции (под карточкой) = сальдо после предыдущей хронологической */}
          {idx < selectedOps.length - 1 && (
            <div style={{ textAlign: 'right', padding: '4px 12px', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
              Сальдо: <span style={{ fontWeight: 700, color: selectedOps[idx + 1].runningBalance > 0 ? 'var(--danger)' : 'var(--success)' }}>{selectedOps[idx + 1].runningBalance.toLocaleString('ru-RU')} ₽</span>
            </div>
          )}
        </div>
      ))}

      {!selectedId && itemsWithBalance.map(item => (
        <div
          key={item.id}
          className="card"
          onClick={() => setSelectedId(item.id)}
          style={{ marginBottom: 12, cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 500 }}>{item.name}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: item.balance > 0 ? 'var(--danger)' : 'var(--success)' }}>
              {item.balance.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      ))}

      {!selectedId && itemsWithBalance.length === 0 && (
        <div className="empty-state">Нет задолженностей</div>
      )}

      {showAdjustModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: 16 }}>
          <div className="card" style={{ width: '100%', maxWidth: 360 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Корректировка сальдо</h3>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Дата</label>
              <input type="datetime-local" className="form-input" value={adjustDate} onChange={e => setAdjustDate(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Новое сальдо, ₽</label>
              <input type="number" className="form-input" value={adjustTargetBalance} onChange={e => setAdjustTargetBalance(e.target.value)} placeholder="0" />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Комментарий</label>
              <input type="text" className="form-input" value={adjustComment} onChange={e => setAdjustComment(e.target.value)} placeholder="Корректировка сальдо" />
            </div>
            <div className="form-group" style={{ marginBottom: 16 }}>
              <label className="form-label">Фото первички</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-secondary" onClick={() => handleCamera()} style={{ flex: 1, fontSize: 13 }}>
                  <Camera size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Камера
                </button>
                <button className="btn btn-secondary" onClick={() => handleGallery()} style={{ flex: 1, fontSize: 13 }}>
                  <ImageIcon size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Галерея
                </button>
              </div>
              {photoIds.length > 0 && (
                <div className="photo-grid" style={{ marginTop: 8 }}>
                  {photoIds.map(pid => (
                    <img key={pid} src={photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-primary" onClick={handleAdjust} style={{ flex: 1 }}>Сохранить</button>
              <button className="btn btn-secondary" onClick={() => { setShowAdjustModal(false); setPhotoIds([]); setPhotos({}); }} style={{ flex: 1 }}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && editOp && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: 16 }}>
          <div className="card" style={{ width: '100%', maxWidth: 360 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Редактировать корректировку</h3>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Дата</label>
              <input type="datetime-local" className="form-input" value={editDate} onChange={e => setEditDate(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Новое сальдо, ₽</label>
              <input type="number" className="form-input" value={editTargetBalance} onChange={e => setEditTargetBalance(e.target.value)} placeholder="0" />
            </div>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Комментарий</label>
              <input type="text" className="form-input" value={editComment} onChange={e => setEditComment(e.target.value)} placeholder="Корректировка сальдо" />
            </div>
            <div className="form-group" style={{ marginBottom: 16 }}>
              <label className="form-label">Фото первички</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-secondary" onClick={() => handleCamera(true)} style={{ flex: 1, fontSize: 13 }}>
                  <Camera size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Камера
                </button>
                <button className="btn btn-secondary" onClick={() => handleGallery(true)} style={{ flex: 1, fontSize: 13 }}>
                  <ImageIcon size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Галерея
                </button>
              </div>
              {editPhotoIds.length > 0 && (
                <div className="photo-grid" style={{ marginTop: 8 }}>
                  {editPhotoIds.map(pid => (
                    <img key={pid} src={editPhotos[pid] || photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-primary" onClick={handleEditAdjust} style={{ flex: 1 }}>Сохранить</button>
              <button className="btn btn-secondary" onClick={() => { setShowEditModal(false); setEditOp(null); }} style={{ flex: 1 }}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
