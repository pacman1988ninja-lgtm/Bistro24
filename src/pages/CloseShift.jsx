import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, toNum } from '../store';
import { ArrowLeft, AlertCircle, Lock, Calculator, Camera, ImagePlus, X } from 'lucide-react';

function PhotoThumb({ photoId }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    store.getPhoto(photoId).then(p => p && setSrc(p.dataUrl));
  }, [photoId]);
  return <img src={src || ''} alt="" className="photo-thumb" />;
}

export default function CloseShift({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [loading, setLoading] = useState(true);
  const [opsExpense, setOpsExpense] = useState(0);
  const [opsIncome, setOpsIncome] = useState(0);
  const [revenue, setRevenue] = useState('');
  const [cash, setCash] = useState('');
  const [cashless, setCashless] = useState('');
  const [comment, setComment] = useState('');
  const [photoIds, setPhotoIds] = useState([]);
  const [photoBusy, setPhotoBusy] = useState(false);

  useEffect(() => {
    let mounted = true;
    store.getShift(id).then(s => {
      if (!mounted) return;
      if (!s) {
        alert('Смена не найдена');
        navigate('/');
        return;
      }
      if (s.status === 'Закрыта') {
        alert('Смена уже закрыта');
        navigate(`/shift/${id}`);
        return;
      }
      setShift(s);
      setPhotoIds(s.photoIds || []);
      setLoading(false);
    });
    store.getOperationsByShift(id).then(async ops => {
      if (!mounted) return;
      const refs = await store.getReferences();
      const cashFormId = refs.paymentForms?.find(p => p.name === 'Наличные')?.id;
      const expTotal = ops.filter(o => o.type === 'expense').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      const incTotal = ops.filter(o => o.type === 'income').filter(o => o.paymentFormId === cashFormId).reduce((sum, o) => sum + o.amount, 0);
      setOpsExpense(expTotal);
      setOpsIncome(incTotal);
    });
    return () => { mounted = false; };
  }, [id, navigate]);

  const compressImage = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxWidth = 1000;
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.75));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  const handleAddPhotos = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setPhotoBusy(true);
    const ids = [...photoIds];
    for (const file of files) {
      const dataUrl = await compressImage(file);
      const photo = await store.addPhoto(dataUrl);
      ids.push(photo.id);
    }
    setPhotoIds(ids);
    await store.updateShiftPhotos(id, ids);
    setPhotoBusy(false);
    e.target.value = '';
  };

  const handleRemovePhoto = async (photoId) => {
    const ids = photoIds.filter(p => p !== photoId);
    await store.deletePhoto(photoId);
    setPhotoIds(ids);
    await store.updateShiftPhotos(id, ids);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--text-secondary)' }}>
        Загрузка...
      </div>
    );
  }

  if (!shift) return null;

  const calculated = Number(shift.startBalance) + Number(cash || 0) + opsIncome - opsExpense;
  const revenueMatch = Number(revenue || 0) === (Number(cash || 0) + Number(cashless || 0));

  const handleCalc = () => {
    const nRev = Number(revenue);
    const nCash = toNum(cash);
    const nCashless = toNum(cashless);
    if (revenue !== '' && cash !== '') setCashless(String(nRev - nCash));
    else if (revenue !== '' && cashless !== '') setCash(String(nRev - nCashless));
    else alert('Заполните выручку и одно из полей (наличные или безналичные)');
  };

  const handleClose = async () => {
    if (!revenueMatch) {
      if (!confirm('Выручка не равна сумме наличных и безнала. Продолжить?')) return;
    }
    const result = await store.closeShift(id, { revenue, cash, cashless, deposit: opsIncome, expense: opsExpense, comment }, user.id);
    if (!result) {
      alert('Смена уже закрыта');
    }
    navigate(`/shift/${id}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 22 }}>Закрытие смены #{shift.id.slice(-4)}</h1>
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

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Фото смены (Z-отчёт и др.)</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
            <Camera size={16} /> Камера
            <input type="file" accept="image/*" capture="environment" onChange={handleAddPhotos} style={{ display: 'none' }} />
          </label>
          <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
            <ImagePlus size={16} /> Галерея
            <input type="file" accept="image/*" multiple onChange={handleAddPhotos} style={{ display: 'none' }} />
          </label>
        </div>
        {photoBusy && <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Сжатие...</p>}
        {photoIds.length > 0 && (
          <div className="photo-grid">
            {photoIds.map(pid => (
              <div key={pid} style={{ position: 'relative' }}>
                <PhotoThumb photoId={pid} />
                <button onClick={() => handleRemovePhoto(pid)} style={{ position: 'absolute', top: 4, right: 4, background: 'var(--danger)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="form-group"><label className="form-label">Комментарий</label><input type="text" className="form-input" value={comment} onChange={e => setComment(e.target.value)} /></div>

      <button className="btn btn-success" onClick={handleClose} style={{ marginBottom: 40 }}><Lock size={18} /> Подтвердить закрытие</button>
    </div>
  );
}
