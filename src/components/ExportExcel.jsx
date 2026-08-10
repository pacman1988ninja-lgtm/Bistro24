import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { store } from '../store';

export default function ExportExcel() {
  const handleExport = async () => {
    const data = await store.getAllData();
    const wb = XLSX.utils.book_new();
    const shiftsWs = XLSX.utils.json_to_sheet(data.shifts.map(s => ({
      ID: s.id, 'Дата открытия': s.openDate, Сотрудник: s.employeeId,
      'Остаток на начало': s.startBalance, Выручка: s.revenue,
      Наличные: s.cash, Безнал: s.cashless, Внесение: s.deposit,
      Расход: s.expense, 'Остаток на конец': s.endBalance,
      Статус: s.status, 'Дата закрытия': s.closeDate || '', Комментарий: s.comment,
    })));
    XLSX.utils.book_append_sheet(wb, shiftsWs, 'Смены');
    const opsWs = XLSX.utils.json_to_sheet(data.operations.map(o => ({
      ID: o.id, Дата: o.date, 'ID смены': o.shiftId, Сумма: o.amount,
      Тип: o.type === 'income' ? 'Приход' : 'Расход',
      'Статья расхода': o.expenseTypeId, 'Форма оплаты': o.paymentFormId,
      Сотрудник: o.employeeId, Комментарий: o.comment,
    })));
    XLSX.utils.book_append_sheet(wb, opsWs, 'Операции');
    XLSX.writeFile(wb, `Бистро24_${new Date().toISOString().slice(0,10)}.xlsx`);
  };
  return (
    <button className="btn btn-secondary" onClick={handleExport} style={{ marginBottom: 16 }}>
      <Download size={18} /> Выгрузить в Excel
    </button>
  );
}
