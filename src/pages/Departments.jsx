import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { ArrowLeft, Plus, Trash2, Edit3, Check, X, Link2, Users, Download } from 'lucide-react';
import { APPSHEET_SEED } from '../appsheetSeed';

const REF_CONFIG = [
  { key: 'expenseTypes', label: 'Статьи расходов' },
  { key: 'writeOffTypes', label: 'Статьи списания' },
  { key: 'incomeSources', label: 'Источники поступлений' },
  { key: 'counterparties', label: 'Контрагенты' },
  { key: 'employees', label: 'Сотрудники' },
  { key: 'contractors', label: 'Подрядчики' },
  { key: 'paymentForms', label: 'Формы оплаты' },
  { key: 'shiftTypes', label: 'Типы смен' },
];

const ROLE_OPTIONS = [
  { key: 'seller', label: 'Сотрудник' },
  { key: 'manager', label: 'Управляющий' },
  { key: 'owner', label: 'Руководитель' },
];

const LINK_OPTIONS = [
  { key: '', label: 'Нет связи' },
  { key: 'counterparties', label: 'Контрагенты' },
  { key: 'employees', label: 'Сотрудники' },
  { key: 'contractors', label: 'Подрядчики' },
];

const BUILTIN_KEYS = ['expenseTypes', 'writeOffTypes', 'incomeSources', 'counterparties', 'employees', 'contractors', 'paymentForms', 'shiftTypes'];

export default function Departments({ user }) {
  const navigate = useNavigate();
  const [refs, setRefs] = useState({});
  const [refType, setRefType] = useState('expenseTypes');

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editRole, setEditRole] = useState('seller');
  const [editPin, setEditPin] = useState('');
  const [editBaseSalary, setEditBaseSalary] = useState('');
  const [editRevenuePercent, setEditRevenuePercent] = useState('');
  const [editLinked, setEditLinked] = useState('');
  const [editShiftTypes, setEditShiftTypes] = useState([]);

  const [showNewType, setShowNewType] = useState(false);
  const [newTypeName, setNewTypeName] = useState('');
  const [editingTypeKey, setEditingTypeKey] = useState(null);
  const [editTypeName, setEditTypeName] = useState('');

  const [showAddFromList, setShowAddFromList] = useState(false);
  const [addFromListSource, setAddFromListSource] = useState('employees');
  const [addFromListId, setAddFromListId] = useState('');

  const [showImportPreview, setShowImportPreview] = useState(false);
  const [importSummary, setImportSummary] = useState(null);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setRefs(await store.getReferences());
  };

  const save = async (updated) => {
    await store.saveReferences(updated);
    if (updated.employees) await store.syncEmployees(updated.employees);
    setRefs(updated);
  };

  const addType = () => {
    if (!newTypeName.trim()) return;
    const key = 'ref_' + Date.now();
    const updated = { ...refs };
    updated[key] = [];
    if (!updated.refMeta) updated.refMeta = {};
    updated.refMeta[key] = { name: newTypeName.trim() };
    save(updated);
    setNewTypeName('');
    setShowNewType(false);
    setRefType(key);
  };

  const startEditType = (key) => {
    setEditingTypeKey(key);
    setEditTypeName(refs.refMeta?.[key]?.name || key);
  };

  const saveEditType = () => {
    if (!editTypeName.trim()) return;
    const updated = { ...refs };
    if (!updated.refMeta) updated.refMeta = {};
    updated.refMeta[editingTypeKey] = { name: editTypeName.trim() };
    save(updated);
    setEditingTypeKey(null);
    setEditTypeName('');
  };

  const deleteType = () => {
    if (!confirm('Удалить справочник и все его записи?')) return;
    const updated = { ...refs };
    delete updated[refType];
    if (updated.refMeta) delete updated.refMeta[refType];
    save(updated);
    setRefType('expenseTypes');
  };

  const startCreate = () => {
    setIsEditing(true);
    setEditId(null);
    setEditName('');
    setEditRole('seller');
    setEditPin('');
    setEditLinked('');
    setEditBaseSalary('');
    setEditRevenuePercent('');
    setEditShiftTypes([]);
  };

  const startEdit = (item) => {
    setIsEditing(true);
    setEditId(item.id);
    setEditName(item.name);
    setEditRole(item.role || 'seller');
    setEditPin(item.pin || '');
    setEditLinked(item.linkedRef || '');
    setEditBaseSalary(item.baseSalary != null ? String(item.baseSalary) : '');
    setEditRevenuePercent(item.revenuePercent != null ? String(item.revenuePercent) : '');
    setEditShiftTypes(item.shiftTypes || []);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setEditName('');
    setEditPin('');
    setEditLinked('');
    setEditBaseSalary('');
    setEditRevenuePercent('');
    setEditShiftTypes([]);
  };

  const isPinTaken = (pin, excludeId) => {
    if (!pin) return false;
    return (refs.employees || []).some(e => e.active && e.pin === pin && e.id !== excludeId);
  };

  const saveItem = () => {
    if (!editName.trim()) return alert('Введите название');
    if (refType === 'employees' && editPin && isPinTaken(editPin, editId)) {
      return alert('Этот PIN уже используется другим активным сотрудником. Выберите другой.');
    }
    const updated = { ...refs };
    if (editId) {
      updated[refType] = updated[refType].map(i => {
        if (i.id !== editId) return i;
        const upd = { ...i, name: editName.trim() };
        if (refType === 'employees') { upd.role = editRole; upd.pin = editPin; upd.shiftTypes = editShiftTypes; }
        if (refType === 'expenseTypes') {
          if (editLinked) upd.linkedRef = editLinked;
          else delete upd.linkedRef;
        }
        if (refType === 'shiftTypes') {
          upd.baseSalary = editBaseSalary === '' ? 0 : Number(editBaseSalary);
          upd.revenuePercent = editRevenuePercent === '' ? 0 : Number(editRevenuePercent);
        }
        return upd;
      });
    } else {
      const list = [...(updated[refType] || [])];
      const item = { id: 'ref_' + Date.now(), name: editName.trim(), active: true };
      if (refType === 'employees') { item.role = editRole; item.pin = editPin; item.shiftTypes = editShiftTypes; }
      if (refType === 'expenseTypes' && editLinked) item.linkedRef = editLinked;
      if (refType === 'shiftTypes') {
        item.baseSalary = editBaseSalary === '' ? 0 : Number(editBaseSalary);
        item.revenuePercent = editRevenuePercent === '' ? 0 : Number(editRevenuePercent);
      }
      list.push(item);
      updated[refType] = list;
    }
    save(updated);
    cancelEdit();
  };

  const deleteItem = (id) => {
    if (!confirm('Удалить запись?')) return;
    const updated = { ...refs };
    updated[refType] = updated[refType].filter(i => i.id !== id);
    save(updated);
  };

  const toggleActive = (id) => {
    const updated = { ...refs };
    updated[refType] = updated[refType].map(i => i.id === id ? { ...i, active: !i.active } : i);
    save(updated);
  };

  const getImportCandidates = () => {
    const source = refs[addFromListSource] || [];
    const already = new Set(
      (refs[refType] || [])
        .filter(s => s.linkedRef === addFromListSource)
        .map(s => s.linkedId)
    );
    return source.filter(i => i.active && !already.has(i.id));
  };

  const handleAddFromList = () => {
    if (!addFromListId) return alert('Выберите запись');
    const item = (refs[addFromListSource] || []).find(i => i.id === addFromListId);
    if (!item) return;
    const updated = { ...refs };
    const list = [...(updated[refType] || [])];
    list.push({
      id: 'ref_' + Date.now(),
      name: item.name,
      active: true,
      linkedRef: addFromListSource,
      linkedId: item.id,
    });
    updated[refType] = list;
    save(updated);
    setShowAddFromList(false);
    setAddFromListId('');
  };

  const buildImportSummary = () => {
    const existingNames = (key) => new Set((refs[key] || []).map(i => i.name.trim().toLowerCase()));

    const empExisting = existingNames('employees');
    const newEmployees = APPSHEET_SEED.employees.filter(e => !empExisting.has(e.name.trim().toLowerCase()));

    const contrExisting = existingNames('contractors');
    const newContractors = APPSHEET_SEED.contractors.filter(name => !contrExisting.has(name.trim().toLowerCase()));

    const cpExisting = existingNames('counterparties');
    const newCounterparties = APPSHEET_SEED.counterparties.filter(name => !cpExisting.has(name.trim().toLowerCase()));

    const etExisting = existingNames('expenseTypes');
    const newExpenseTypes = APPSHEET_SEED.expenseTypes.filter(t => !etExisting.has(t.name.trim().toLowerCase()));

    return {
      newEmployees,
      newContractors,
      newCounterparties,
      newExpenseTypes,
      skippedEmployees: APPSHEET_SEED.employees.length - newEmployees.length,
      skippedContractors: APPSHEET_SEED.contractors.length - newContractors.length,
      skippedCounterparties: APPSHEET_SEED.counterparties.length - newCounterparties.length,
      skippedExpenseTypes: APPSHEET_SEED.expenseTypes.length - newExpenseTypes.length,
    };
  };

  const openImportPreview = () => {
    setImportSummary(buildImportSummary());
    setShowImportPreview(true);
  };

  const runImport = () => {
    if (!importSummary) return;
    const updated = { ...refs };

    const empList = [...(updated.employees || [])];
    importSummary.newEmployees.forEach(e => {
      empList.push({ id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name: e.name, active: true, role: e.role, pin: '', email: e.email || '' });
    });
    updated.employees = empList;

    const contrList = [...(updated.contractors || [])];
    importSummary.newContractors.forEach(name => {
      contrList.push({ id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name, active: true });
    });
    updated.contractors = contrList;

    const cpList = [...(updated.counterparties || [])];
    importSummary.newCounterparties.forEach(name => {
      cpList.push({ id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name, active: true });
    });
    updated.counterparties = cpList;

    const etList = [...(updated.expenseTypes || [])];
    importSummary.newExpenseTypes.forEach(t => {
      const item = { id: 'ref_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7), name: t.name, active: true };
      if (t.linkedRef) item.linkedRef = t.linkedRef;
      etList.push(item);
    });
    updated.expenseTypes = etList;

    save(updated);
    setShowImportPreview(false);
    setImportSummary(null);
    alert('Импорт завершён');
  };

  const currentList = refs[refType] || [];
  const isEmployees = refType === 'employees';
  const isExpenseTypes = refType === 'expenseTypes';
  const isIncomeSources = refType === 'incomeSources';
  const isWriteOffTypes = refType === 'writeOffTypes';
  const isShiftTypes = refType === 'shiftTypes';
  const isCustom = !BUILTIN_KEYS.includes(refType);

  const customKeys = Object.keys(refs).filter(k => !BUILTIN_KEYS.includes(k) && k !== 'refMeta');

  if (user.role !== 'owner' && user.role !== 'manager') {
    return <div className="empty-state">Доступ только для владельца или управляющего</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
          <h1 style={{ fontSize: 22 }}>Справочники</h1>
        </div>
        {user.role === 'owner' && (
          <button onClick={openImportPreview} className="btn btn-secondary" style={{ width: 'auto', padding: '8px 12px', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Download size={14} /> Импорт AppSheet
          </button>
        )}
      </div>

      {showImportPreview && importSummary && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <h3 style={{ marginBottom: 10, fontSize: 15 }}>Импорт справочников из AppSheet</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>
            Сотрудники: +{importSummary.newEmployees.length} новых {importSummary.skippedEmployees > 0 ? '(' + importSummary.skippedEmployees + ' уже есть)' : ''}<br/>
            Подрядчики: +{importSummary.newContractors.length} новых {importSummary.skippedContractors > 0 ? '(' + importSummary.skippedContractors + ' уже есть)' : ''}<br/>
            Контрагенты: +{importSummary.newCounterparties.length} новых {importSummary.skippedCounterparties > 0 ? '(' + importSummary.skippedCounterparties + ' уже есть)' : ''}<br/>
            Статьи расходов: +{importSummary.newExpenseTypes.length} новых {importSummary.skippedExpenseTypes > 0 ? '(' + importSummary.skippedExpenseTypes + ' уже есть)' : ''}
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 12 }}>
            История смен и операций не импортируется — только справочники. Сотрудникам нужно будет вручную задать PIN-коды.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-success" onClick={runImport} style={{ flex: 1 }}>Импортировать</button>
            <button className="btn btn-secondary" onClick={() => { setShowImportPreview(false); setImportSummary(null); }} style={{ flex: 1 }}>Отмена</button>
          </div>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Справочник</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <select className="form-select" value={refType} onChange={e => { setRefType(e.target.value); cancelEdit(); setShowAddFromList(false); }} style={{ flex: 1 }}>
            {REF_CONFIG.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
            {customKeys.map(k => (
              <option key={k} value={k}>{refs.refMeta?.[k]?.name || k}</option>
            ))}
          </select>
          {isCustom && (
            <button onClick={() => startEditType(refType)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 8, padding: '10px 12px', color: 'var(--text)' }}><Edit3 size={16} /></button>
          )}
          {isCustom && (
            <button onClick={deleteType} style={{ background: 'var(--danger)', border: 'none', borderRadius: 8, padding: '10px 12px', color: '#fff' }}><Trash2 size={16} /></button>
          )}
          <button className="btn btn-primary" onClick={() => setShowNewType(true)} style={{ width: 'auto', padding: '10px 14px' }}><Plus size={18} /></button>
        </div>
      </div>

      {editingTypeKey && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              className="form-input"
              value={editTypeName}
              onChange={e => setEditTypeName(e.target.value)}
              placeholder="Название справочника..."
              style={{ flex: 1 }}
              onKeyDown={e => e.key === 'Enter' && saveEditType()}
            />
            <button className="btn btn-success" onClick={saveEditType} style={{ width: 'auto', padding: '14px 16px' }}><Check size={18} /></button>
            <button className="btn btn-secondary" onClick={() => { setEditingTypeKey(null); setEditTypeName(''); }} style={{ width: 'auto', padding: '14px 16px' }}><X size={18} /></button>
          </div>
        </div>
      )}

      {showNewType && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              className="form-input"
              value={newTypeName}
              onChange={e => setNewTypeName(e.target.value)}
              placeholder="Название справочника..."
              style={{ flex: 1 }}
              onKeyDown={e => e.key === 'Enter' && addType()}
            />
            <button className="btn btn-success" onClick={addType} style={{ width: 'auto', padding: '14px 16px' }}><Check size={18} /></button>
            <button className="btn btn-secondary" onClick={() => { setShowNewType(false); setNewTypeName(''); }} style={{ width: 'auto', padding: '14px 16px' }}><X size={18} /></button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button className="btn btn-primary" onClick={startCreate} style={{ flex: 1, padding: '14px 20px' }}>
          <Plus size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Добавить строчку
        </button>
        {(isIncomeSources || isWriteOffTypes) && (
          <button className="btn btn-secondary" onClick={() => setShowAddFromList(!showAddFromList)} style={{ flex: 1, padding: '14px 20px' }}>
            <Users size={18} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Из справочника
          </button>
        )}
      </div>

      {(showAddFromList && (isIncomeSources || isWriteOffTypes)) && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12 }}>
            Добавит запись, привязанную к выбранной записи из справочника — это позволит в будущем свести дебет-кредит.
          </p>
          <div className="form-group" style={{ marginBottom: 10 }}>
            <label className="form-label">Список</label>
            <select className="form-select" value={addFromListSource} onChange={e => { setAddFromListSource(e.target.value); setAddFromListId(''); }}>
              <option value="employees">Сотрудники</option>
              <option value="contractors">Подрядчики</option>
              <option value="counterparties">Контрагенты</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 10 }}>
            <label className="form-label">Запись</label>
            <select className="form-select" value={addFromListId} onChange={e => setAddFromListId(e.target.value)}>
              <option value="">Выберите...</option>
              {getImportCandidates().map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-success" onClick={handleAddFromList} style={{ flex: 1 }}>Добавить</button>
            <button className="btn btn-secondary" onClick={() => { setShowAddFromList(false); setAddFromListId(''); }} style={{ flex: 1 }}>Отмена</button>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="card" style={{ marginBottom: 16, background: 'var(--surface-light)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input
              type="text"
              className="form-input"
              value={editName}
              onChange={e => setEditName(e.target.value)}
              placeholder={isEmployees ? 'ФИО сотрудника...' : 'Название...'}
              onKeyDown={e => e.key === 'Enter' && saveItem()}
            />
            {isEmployees && (
              <>
                <select className="form-select" value={editRole} onChange={e => setEditRole(e.target.value)}>
                  {ROLE_OPTIONS.map(r => <option key={r.key} value={r.key}>{r.label}</option>)}
                </select>
                <input
                  type="text"
                  className="form-input"
                  value={editPin}
                  onChange={e => setEditPin(e.target.value)}
                  placeholder="PIN-код (4 цифры)"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                />
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Доступные типы смен:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {(refs.shiftTypes || []).filter(t => t.active).map(t => (
                    <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer', background: 'var(--surface)', padding: '6px 10px', borderRadius: 8 }}>
                      <input
                        type="checkbox"
                        checked={editShiftTypes.includes(t.id)}
                        onChange={e => {
                          if (e.target.checked) setEditShiftTypes([...editShiftTypes, t.id]);
                          else setEditShiftTypes(editShiftTypes.filter(id => id !== t.id));
                        }}
                      />
                      {t.name}
                    </label>
                  ))}
                </div>
              </>
            )}
            {isExpenseTypes && (
              <select className="form-select" value={editLinked} onChange={e => setEditLinked(e.target.value)}>
                {LINK_OPTIONS.map(l => <option key={l.key} value={l.key}>{l.label}</option>)}
              </select>
            )}
            {isShiftTypes && (
              <>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <label className="form-label" style={{ marginBottom: 4 }}>Оклад за смену, ₽</label>
                    <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={editBaseSalary} onChange={e => setEditBaseSalary(e.target.value)} placeholder="0" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label" style={{ marginBottom: 4 }}>% от выручки</label>
                    <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={editRevenuePercent} onChange={e => setEditRevenuePercent(e.target.value)} placeholder="0" />
                  </div>
                </div>
              </>
            )}
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-success" onClick={saveItem} style={{ flex: 1 }}><Check size={16} /> Сохранить</button>
              <button className="btn btn-secondary" onClick={cancelEdit} style={{ flex: 1 }}><X size={16} /> Отмена</button>
            </div>
          </div>
        </div>
      )}

      {currentList.map(item => (
        <div key={item.id} className="list-item">
          <div className="list-item-info" style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            {isEmployees && item.role && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                {ROLE_OPTIONS.find(r => r.key === item.role)?.label || item.role}
                {item.pin && <span style={{ marginLeft: 8 }}>• PIN: {item.pin}</span>}
                {item.shiftTypes?.length > 0 && (
                  <span style={{ marginLeft: 8 }}>• Смены: {item.shiftTypes.map(stid => refs.shiftTypes?.find(t => t.id === stid)?.name).filter(Boolean).join(', ')}</span>
                )}
              </p>
            )}
            {isExpenseTypes && item.linkedRef && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                <Link2 size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {LINK_OPTIONS.find(l => l.key === item.linkedRef)?.label || item.linkedRef}
              </p>
            )}
            {isWriteOffTypes && item.linkedRef && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                <Link2 size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {LINK_OPTIONS.find(l => l.key === item.linkedRef)?.label || item.linkedRef}
              </p>
            )}
            {isIncomeSources && item.linkedRef && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                <Link2 size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {LINK_OPTIONS.find(l => l.key === item.linkedRef)?.label || item.linkedRef}
              </p>
            )}
            {isShiftTypes && (
              <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                Оклад: {(item.baseSalary || 0).toLocaleString('ru-RU')} ₽
                {item.revenuePercent ? <span style={{ marginLeft: 8 }}>• % от выручки: {item.revenuePercent}%</span> : ''}
              </p>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => toggleActive(item.id)} className="btn btn-secondary" style={{ width: 'auto', padding: '6px 10px', fontSize: 11 }}>
              {item.active ? 'Активна' : 'Скрыта'}
            </button>
            <button onClick={() => startEdit(item)} style={{ background: 'var(--surface-light)', border: 'none', borderRadius: 6, padding: 8, color: 'var(--text)' }}><Edit3 size={14} /></button>
            <button onClick={() => deleteItem(item.id)} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 8, color: '#fff' }}><Trash2 size={14} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
