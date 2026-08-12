import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { ArrowLeft, Receipt, Lock, List, AlertCircle, Edit3, History, Trash2, ChevronDown, ChevronUp, UserPlus, X, Check } from 'lucide-react';

export default function ShiftDetail({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState(null);
  const [ops, setOps] = useState([]);
  const [audit, setAudit] = useState([]);
  const [refs, setRefs] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [showAddEmp, setShowAddEmp] = useState(false);
  const [addEmpType, setAddEmpType] = useState('');
  const [addEmpId, setAddEmpId] = useState('');
  const [editingTypeFor, setEditingTypeFor] = useState(null);
  const [editTypeValue, setEditTypeValue] = useState('');

  useEffect(() => { load(); }, [id]);

  const load = async () => {
    const s = await store.getShift(id);
    const o = await store.getOperationsByShift(id);
    const a = await store.getAuditLog('shift', id);
    const r = await store.getReferences();
    setShift(s);
    setOps(o);
    setAudit(a);
    setRefs(r);
  };

  const handleDelete = async () => {
    if (!confirm('Удалить смену? Все операции будут удалены. Это действие нельзя отменить.')) return;
    const ok = await store.deleteShift(id, user.id);
    if (ok) navigate('/');
    else alert('Нет прав на удаление или срок редактирования истёк');
  };

  const handleAddEmployeeWithType = async () => {
    if (!addEmpType) return alert('Выберите тип смены');
    if (!addEmpId) return alert('Выберите сотрудника');
    await store.addEmployeeToShift(id, addEmpId, addEmpType);
    setShowAddEmp(false);
    setAddEmpType('');
    setAddEmpId('');
    load();
  };

  const handleRemoveEmployee = async (empId) => {
    if (!confirm('Убрать сотрудника из смены?')) return;
    await store.removeEmployeeFromShift(id, empId);
    load();
  };

  const startEditType = (empId) => {
    setEditingTypeFor(empId);
    setEditTypeValue(getEmpType(empId) || '');
  };

  const saveEditType = async (empId) => {
    if (!editTypeValue) return alert('Выберите тип смены');
    await store.updateEmployeeShiftType(id, empId, editTypeValue);
    setEditingTypeFor(null);
    setEditTypeValue('');
    load();
  };

  const cancelEditType = () => {
    setEditingTypeFor(null);
    setEditTypeValue('');
  };

  if (!shift) return <div className="empty-state">Загрузка...</div>;

  const getEmpType = (empId) => shift.employeeShiftTypes?.[empId] ?? shift.shiftTypeId ?? null;
  const getEmpTypeName = (empId) => {
    const tid = getEmpType(empId);
    return tid ? refs.shiftTypes?.find(t => t.id === tid)?.name : null;
  };
  // Типы смен, разрешённые конкретному сотруднику (его личные смены)
  const allowedTypesFor = (empId) => {
    const emp = refs.employees?.find(e => e.id === empId);
    return (refs.shiftTypes || []).filter(t =>
      t.active && (!emp?.shiftTypes?.length || emp.shiftTypes.includes(t.id))
    );
  };

  const totalIncome = ops.filter(o => o.type === 'income').reduce((s, o) => s + o.amount, 0);
  const totalExpense = ops.filter(o => o.type === 'expense').reduce((s, o) => s + o.amount, 0);
  const canEdit = shift.status === 'Открыта' && (shift.employeeIds?.includes(user.id) || user.role !== 'seller');
  const canModifyClosed = store.canEditShift(shift, user);
  const isOwner = user.role === 'owner';

  const getUserName = (eid) => refs.employees?.find(e => e.id === eid)?.name || '—';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}><ArrowLeft size={24} /></button>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 22 }}>Смена #{shift.shiftNumber || shift.id.slice(-4)}</h1>
          <span className={'badge ' + (shift.status === 'Открыта' ? 'badge-open' : 'badge-closed')}>{shift.status}</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {shift.status === 'Закрыта' && canModifyClosed && (
            <>
              <button onClick={() => navigate(`/shift/${id}/edit`)} style={{ background: 'var(--warning)', border: 'none', borderRadius: 8, padding: '8px 12px', color: '#000', fontSize: 12, fontWeight: 600 }}>
                <Edit3 size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />Изменить
              </button>
              <button onClick={handleDelete} style={{ background: 'var(--danger)', border: 'none', borderRadius: 8, padding: '8px 12px', color: '#fff', fontSize: 12, fontWeight: 600 }}>
                <Trash2 size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />Удалить
              </button>
            </>
          )}
          {shift.status === 'Открыта' && (
            <button onClick={handleDelete} style={{ background: 'var(--danger)', border: 'none', borderRadius: 8, padding: '8px 12px', color: '#fff', fontSize: 12, fontWeight: 600 }}>
              <Trash2 size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />Удалить
            </button>
          )}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)' }}>
          <span>Открыта: {new Date(shift.openDate).toLocaleString('ru-RU')}</span>
          {shift.closeDate && <span>Закрыта: {new Date(shift.closeDate).toLocaleString('ru-RU')}</span>}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Сотрудники смены</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
          {shift.employeeIds?.map(eid => (
            <div key={eid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'var(--surface-light)', padding: '6px 12px', borderRadius: 20, fontSize: 13, minWidth: 90 }}>
              <span>{getUserName(eid)}</span>
              {editingTypeFor === eid ? (
                <div style={{ display: 'flex', gap: 4, alignItems: 'center', marginTop: 4 }}>
                  <select
                    className="form-select"
                    value={editTypeValue}
                    onChange={e => setEditTypeValue(e.target.value)}
                    style={{ padding: '4px 6px', fontSize: 11, borderRadius: 6 }}
                  >
                    <option value="">Тип...</option>
                    {allowedTypesFor(eid).map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                  <button onClick={() => saveEditType(eid)} style={{ background: 'var(--success)', border: 'none', borderRadius: 6, padding: 4, color: '#fff' }}><Check size={12} /></button>
                  <button onClick={cancelEditType} style={{ background: 'var(--danger)', border: 'none', borderRadius: 6, padding: 4, color: '#fff' }}><X size={12} /></button>
                </div>
              ) : (
                <span
                  onClick={() => (shift.status === 'Открыта' && canEdit) && startEditType(eid)}
                  style={{ color: 'var(--text-secondary)', fontSize: 11, cursor: (shift.status === 'Открыта' && canEdit) ? 'pointer' : 'default', textDecoration: (shift.status === 'Открыта' && canEdit) ? 'underline dotted' : 'none' }}
                >
                  {getEmpTypeName(eid) || '—'}
                </span>
              )}
              {shift.status === 'Открыта' && canEdit && shift.employeeIds.length > 1 && editingTypeFor !== eid && (
                <button onClick={() => handleRemoveEmployee(eid)} style={{ background: 'none', border: 'none', color: 'var(--danger)', padding: 0, marginTop: 2 }}><X size={14} /></button>
              )}
            </div>
          ))}
        </div>
        {shift.status === 'Открыта' && canEdit && (
          <>
            <button className="btn btn-secondary" onClick={() => setShowAddEmp(!showAddEmp)} style={{ padding: 10, fontSize: 13 }}>
              <UserPlus size={14} style={{ marginRight: 4 }} /> Добавить сотрудника
            </button>
            {showAddEmp && (
              <div className="card" style={{ marginTop: 8, background: 'var(--surface-light)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Тип смены</label>
                    <select className="form-select" value={addEmpType} onChange={e => { setAddEmpType(e.target.value); setAddEmpId(''); }}>
                      <option value="">Выберите тип...</option>
                      {refs.shiftTypes?.filter(t => t.active).map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Сотрудник</label>
                    <select className="form-select" value={addEmpId} onChange={e => setAddEmpId(e.target.value)}>
                      <option value="">Выберите сотрудника...</option>
                      {addEmpType && refs.employees?.filter(e => {
                        if (!e.active) return false;
                        if (shift.employeeIds?.includes(e.id)) return false;
                        if (e.shiftTypes && e.shiftTypes.length > 0) return e.shiftTypes.includes(addEmpType);
                        return true;
                      }).map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-success" onClick={handleAddEmployeeWithType} style={{ flex: 1 }}>Добавить</button>
                    <button className="btn btn-secondary" onClick={() => { setShowAddEmp(false); setAddEmpType(''); setAddEmpId(''); }} style={{ flex: 1 }}>Отмена</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card"><h3>Начало</h3><p>{shift.startBalance.toLocaleString('ru-RU')} ₽</p></div>
        <div className="stat-card"><h3>Конец</h3><p>{shift.endBalance.toLocaleString('ru-RU')} ₽</p></div>
      </div>

      {shift.status === 'Закрыта' && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-title">Итоги закрытия</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Выручка</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.revenue.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Наличные</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.cash.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Безнал</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.cashless.toLocaleString('ru-RU')} ₽</div></div>
            <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Расход</div><div style={{ fontSize: 18, fontWeight: 600 }}>{shift.expense.toLocaleString('ru-RU')} ₽</div></div>
          </div>
          {shift.revenue !== shift.cash + shift.cashless && (
            <div style={{ color: 'var(--warning)', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <AlertCircle size={14} /> Выручка ≠ Наличные + Безнал
            </div>
          )}
        </div>
      )}

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Операции</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 24, color: 'var(--success)', fontWeight: 700 }}>+{totalIncome.toLocaleString('ru-RU')}</div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Приход</div></div>
          <div style={{ textAlign: 'center', flex: 1 }}><div style={{ fontSize: 24, color: 'var(--danger)', fontWeight: 700 }}>-{totalExpense.toLocaleString('ru-RU')}</div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Расход</div></div>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate(`/shift/${id}/operations`)}><List size={18} /> Журнал операций</button>
      </div>

      {isOwner && audit.length > 0 && (
        <div className="card" style={{ marginBottom: 16 }}>
          <button onClick={() => setShowHistory(!showHistory)} style={{ background: 'none', border: 'none', color: 'var(--text)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
            <div className="card-title" style={{ marginBottom: 0 }}><History size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} /> История изменений</div>
            {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {showHistory && (
            <div style={{ marginTop: 12 }}>
              {audit.map(a => (
                <div key={a.id} style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{new Date(a.timestamp).toLocaleString('ru-RU')}</span>
                    <span style={{ color: 'var(--primary)' }}>{a.action}</span>
                  </div>
                  <div style={{ marginTop: 2 }}>
                    {a.details?.new?.revenue !== undefined && `Выручка: ${a.details.new.revenue} ₽`}
                    {a.details?.new?.cash !== undefined && `, Нал: ${a.details.new.cash} ₽`}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {canEdit && (
        <>
          <button className="btn btn-primary" onClick={() => navigate(`/shift/${id}/operations/new`)} style={{ marginBottom: 12 }}><Receipt size={18} /> Добавить операцию</button>
          <button className="btn btn-success" onClick={() => navigate(`/shift/${id}/close`)} style={{ marginBottom: 40 }}><Lock size={18} /> Закрыть смену</button>
        </>
      )}
    </div>
  );
}
