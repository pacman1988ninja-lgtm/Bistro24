import { useState, useEffect } from 'react';
import { store } from '../store';
import { ArrowLeft, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Payroll({ user }) {
  const navigate = useNavigate();
  const isManager = user.role === 'manager' || user.role === 'owner';

  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [payments, setPayments] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [employees, setEmployees] = useState([]);
  const [selectedEmpId, setSelectedEmpId] = useState(isManager ? '' : user.id);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentComment, setPaymentComment] = useState('');

  const monthNames = [
    'Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
  ];

  useEffect(() => {
    if (isManager) {
      store.getUsers().then(u => setEmployees(u.filter(e => e.role === 'seller')));
    }
  }, []);

  useEffect(() => { load(); }, [year, month, selectedEmpId]);

  const load = async () => {
    if (isManager && !selectedEmpId) {
      const result = await store.calculatePayrollAll(year, month);
      setAllData(result);
      setData(null);
      setPayments([]);
    } else {
      const empId = selectedEmpId || user.id;
      const result = await store.calculatePayroll(empId, year, month);
      const pays = await store.getPayrollPayments(empId, year, month);
      setData(result);
      setPayments(pays);
      setAllData(null);
    }
  };

  const handleAddPayment = async () => {
    if (!paymentAmount || Number(paymentAmount) <= 0) return alert('Введите сумму');
    await store.addPayrollPayment({
      employeeId: selectedEmpId || user.id,
      amount: Number(paymentAmount),
      year,
      month,
      comment: paymentComment,
    });
    setPaymentAmount('');
    setPaymentComment('');
    setShowPaymentForm(false);
    load();
  };

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(y => y - 1); }
    else { setMonth(m => m - 1); }
  };

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const isFuture = year > currentYear || (year === currentYear && month > currentMonth);

  const nextMonth = () => {
    if (isFuture) return;
    if (month === 12) { setMonth(1); setYear(y => y + 1); }
    else { setMonth(m => m + 1); }
  };

  const accrued = data?.total || 0;
  const paid = data?.paid || 0;
  const balance = accrued - paid;
  const totalBase = data?.lines.reduce((s, l) => s + l.baseSalary, 0) || 0;
  const totalPercent = data?.lines.reduce((s, l) => s + l.percentAmount, 0) || 0;

  const selectedEmpName = employees.find(e => e.id === selectedEmpId)?.fullName || user.fullName;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingTop: 'env(safe-area-inset-top)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 22 }}>Зарплата</h1>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <button onClick={prevMonth} style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 8 }}>
            <ChevronLeft size={20} />
          </button>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{monthNames[month - 1]} {year}</div>
          <button onClick={nextMonth} disabled={isFuture} style={{ background: 'none', border: 'none', color: isFuture ? 'var(--surface-light)' : 'var(--text)', padding: 8, opacity: isFuture ? 0.3 : 1 }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {isManager && employees.length > 0 && (
          <div className="form-group" style={{ marginBottom: 12 }}>
            <select className="form-select" value={selectedEmpId} onChange={e => setSelectedEmpId(e.target.value)}>
              <option value="">Все сотрудники</option>
              {employees.map(e => <option key={e.id} value={e.id}>{e.fullName}</option>)}
            </select>
          </div>
        )}

        {!isManager && (
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 8 }}>
            {selectedEmpName}
          </div>
        )}

        {allData && (
          <>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Начислено</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {allData.reduce((s, e) => s + e.lines.reduce((ls, l) => ls + l.baseSalary, 0), 0).toLocaleString('ru-RU')} ₽ оклад + {allData.reduce((s, e) => s + e.lines.reduce((ls, l) => ls + l.percentAmount, 0), 0).toLocaleString('ru-RU')} ₽ %
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--success)' }}>
                  {allData.reduce((s, e) => s + e.total, 0).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Выплачено</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--danger)' }}>
                  {allData.reduce((s, e) => s + e.paid, 0).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Сальдо</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {allData.reduce((s, e) => s + e.lines.length, 0)} смен
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: (allData.reduce((s, e) => s + e.total, 0) - allData.reduce((s, e) => s + e.paid, 0)) >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                  {(allData.reduce((s, e) => s + e.total, 0) - allData.reduce((s, e) => s + e.paid, 0)).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
          </>
        )}

        {data && (
          <>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Начислено</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>
                    оклад {totalBase.toLocaleString('ru-RU')} ₽ + % {totalPercent.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--success)' }}>
                  {accrued.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Выплачено</div>
                  {(data?.paidFromOps || 0) > 0 && (
                    <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 2 }}>
                      в т.ч. через операции {data.paidFromOps.toLocaleString('ru-RU')} ₽
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--danger)' }}>
                  {paid.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--surface-light)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Сальдо</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {data.lines.length} смен
                  </div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: balance >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                  {balance.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
            {isManager && (
              <button className="btn btn-primary" onClick={() => setShowPaymentForm(!showPaymentForm)} style={{ marginTop: 12, width: '100%' }}>
                <Plus size={16} /> Внести выплату
              </button>
            )}
            {showPaymentForm && (
              <div className="card" style={{ marginTop: 12, background: 'var(--surface-light)' }}>
                <div className="form-group">
                  <label className="form-label">Сумма выплаты, ₽</label>
                  <input type="tel" inputMode="decimal" pattern="[0-9.,]*" className="form-input" value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Комментарий</label>
                  <input type="text" className="form-input" value={paymentComment} onChange={e => setPaymentComment(e.target.value)} placeholder="Необязательно" />
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-success" onClick={handleAddPayment} style={{ flex: 1 }}>Сохранить</button>
                  <button className="btn btn-secondary" onClick={() => setShowPaymentForm(false)} style={{ flex: 1 }}><X size={16} /> Отмена</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {!data && !allData && <div className="empty-state">Загрузка...</div>}

      {allData && allData.length === 0 && (
        <div className="empty-state">Нет данных за этот месяц</div>
      )}

      {allData && allData.map(emp => {
        const empBalance = emp.total - emp.paid;
        return (
          <div key={emp.employeeId} className="card" style={{ marginBottom: 10, cursor: 'pointer' }} onClick={() => setSelectedEmpId(emp.employeeId)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{emp.fullName}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--success)' }}>
                  {emp.total.toLocaleString('ru-RU')} ₽
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                  {emp.lines.length} смен
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--surface-light)' }}>
              <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid var(--surface-light)' }}>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Начислено</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)' }}>{emp.total.toLocaleString('ru-RU')} ₽</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid var(--surface-light)' }}>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Выплачено</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--danger)' }}>{emp.paid.toLocaleString('ru-RU')} ₽</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Сальдо</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: empBalance >= 0 ? 'var(--success)' : 'var(--danger)' }}>{empBalance.toLocaleString('ru-RU')} ₽</div>
              </div>
            </div>
          </div>
        );
      })}

      {data && data.lines.length === 0 && (
        <div className="empty-state">Нет отработанных смен за этот месяц</div>
      )}

      {data && data.lines.map((line, idx) => (
        <div key={line.shiftId} className="card" style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>#{idx + 1} — {line.shiftTypeName}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                {new Date(line.date).toLocaleDateString('ru-RU')}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{line.total.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--surface-light)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Оклад</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{line.baseSalary.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Выручка</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{line.revenue.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>% ({line.revenuePercent}%)</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)' }}>+{line.percentAmount.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
