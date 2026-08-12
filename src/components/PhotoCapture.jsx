import { useState, useEffect } from 'react';
import { Camera, X, ImagePlus } from 'lucide-react';
import { store } from '../store';

export default function PhotoCapture({ photoIds, onChange }) {
  const [photos, setPhotos] = useState(photoIds || []);
  const [loading, setLoading] = useState(false);

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 800;
          const scale = Math.min(1, maxWidth / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleCapture = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setLoading(true);
    for (const file of files) {
      const dataUrl = await compressImage(file);
      const photo = await store.addPhoto(dataUrl);
      const newIds = [...photos, photo.id];
      setPhotos(newIds);
      onChange(newIds);
    }
    setLoading(false);
    e.target.value = '';
  };

  const removePhoto = async (id) => {
    await store.deletePhoto(id);
    const newIds = photos.filter((p) => p !== id);
    setPhotos(newIds);
    onChange(newIds);
  };

  return (
    <div className="form-group">
      <label className="form-label">Фото первички</label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
          <Camera size={16} /> Камера
          <input type="file" accept="image/*" capture="environment" onChange={handleCapture} style={{ display: 'none' }} />
        </label>
        <label className="btn btn-secondary" style={{ flex: 1, padding: 12 }}>
          <ImagePlus size={16} /> Галерея
          <input type="file" accept="image/*" multiple onChange={handleCapture} style={{ display: 'none' }} />
        </label>
      </div>
      {loading && <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Сжатие...</p>}
      <div className="photo-grid">
        {photos.map((id) => (
          <div key={id} style={{ position: 'relative' }}>
            <PhotoThumb photoId={id} />
            <button onClick={() => removePhoto(id)} style={{ position: 'absolute', top: 4, right: 4, background: 'var(--danger)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoThumb({ photoId }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    store.getPhoto(photoId).then(p => p && setSrc(p.dataUrl));
  }, [photoId]);
  return <img src={src || ''} alt="" className="photo-thumb" />;
}
