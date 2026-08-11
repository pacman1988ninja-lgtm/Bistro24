import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

export default function Operations({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [refs, setRefs] = useState({});
  const [photos, setPhotos] = useState({});
  const [shift, setShift] = useState(null);

  useEffect(() => { load(); }, [id]);

  const load = async () => {
    const s = await store.getShift(id);
    const o = await store.getOperationsByShift(id);
    const r = await store.getReferences();
    setShift(s);
    setOps(o);
    setRefs(r);
    const ph = {};
    for (const op of o) {
      for (const pid of op.photoIds || []) {
        const p = await store.getPhoto(pid);
        if (p) ph[pid] = p.dataUrl;
      }
    }
    setPhotos(ph);
  };

  const handleDelete = async (opId, e) => {
    e.stopPropagation();
    if (!confirm('Удалить операцию?')) return;
    await store.deleteOperation(opId, user.id);
    load();
  };

  const getName = (list, id) => refs[list]?.find(x => x.id === id)?.name || '-';
  const canEdit = shift?.status === 'Открыта';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(`/shift/${id}`)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <h1 style={{ fontSize: 22 }}>Операции</h1>
      </div>

      {canEdit && (
        <button className="btn btn-primary" onClick={() => navigate(`/shift/${id}/operations/new`)} style={{ marginBottom: 16 }}>
          <Plus size={18} /> Новая операция
        </button>
      )}

      {ops.length === 0 && <div className="empty-state">Нет операций</div>}

      {ops.map(op => (
        <div key={op.id} className="card" style={{ marginBottom: 12, cursor: canEdit ? 'pointer' : 'default' }} onClick={() => canEdit && navigate(`/shift/${id}/operations/${op.id}/edit`)}>
          <div className="list-item" style={{ marginBottom: 0, padding: 0, background: 'none', border: 'none' }}>
            <div className="list-item-info">
              <h3>{getName('expenseTypes', op.expenseTypeId) || (op.type === 'income' ? 'Поступление' : 'Расход')}</h3>
              <p>{new Date(op.date).toLocaleString('ru-RU')} • {getName('paymentForms', op.paymentFormId)}</p>
              {op.comment && <p style={{ fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>{op.comment}</p>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className={'list-item-amount ' + (op.type === 'income' ? 'amount-income' : 'amount-expense')}>
                {op.type === 'income' ? '+' : '-'}{op.amount.toLocaleString('ru-RU')} ₽
              </div>
              {canEdit && (
                <button onClick={(e) => handleDelete(op.id, e)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}>
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          </div>
          {op.photoIds?.length > 0 && (
            <div className="photo-grid" style={{ marginTop: 12 }}>
              {op.photoIds.map(pid => (
                <img key={pid} src={photos[pid] || ''} alt="" className="photo-thumb" style={{ borderRadius: 8 }} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
