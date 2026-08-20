import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { store } from '../store';

export default function ExportExcel() {
  const handleExport = async () => {
    const data = await store.getAllData();
    const refs = await store.getReferences();
    const wb = XLSX.utils.book_new();

    const shiftsWs = XLSX.utils.json_to_sheet(data.shifts.map(s => ({
      ID: s.id, 'Дата открытия': s.openDate, Сотрудник: s.employeeId,
      'Остаток на начало': s.startBalance, Выручка: s.revenue,
      Наличные: s.cash, Безнал: s.cashless, Внесение: s.deposit,
      Расход: s.expense, 'Остаток на конец': s.endBalance,
      Статус: s.status, 'Дата закрытия': s.closeDate || '', Комментарий: s.comment,
    })));
    XLSX.utils.book_append_sheet(wb, shiftsWs, 'Смены');

    const getName = (list, id) => refs[list]?.find(x => x.id === id)?.name || id;
    const opsWs = XLSX.utils.json_to_sheet(data.operations.map(o => ({
      ID: o.id, Дата: o.date, 'ID смены': o.shiftId, Сумма: o.amount,
      Тип: o.type === 'income' ? 'Приход' : 'Расход',
      Категория: o.category === 'goods' ? 'Товар' : 'Наличные',
      'Статья расхода': getName('expenseTypes', o.expenseTypeId),
      'Форма оплаты': getName('paymentForms', o.paymentFormId),
      'Источник дохода': getName('incomeSources', o.sourceId),
      Контрагент: getName('contractors', o.contractorId) || getName('counterparties', o.counterpartyId),
      Сотрудник: getName('employees', o.employeeId),
      Комментарий: o.comment,
    })));
    XLSX.utils.book_append_sheet(wb, opsWs, 'Операции');

    const usersWs = XLSX.utils.json_to_sheet(data.users.map(u => ({
      ID: u.id, Имя: u.fullName, Email: u.email, Роль: u.role,
      PIN: u.pin, Активен: u.active ? 'Да' : 'Нет',
    })));
    XLSX.utils.book_append_sheet(wb, usersWs, 'Сотрудники');

    const refsData = [];
    for (const [key, list] of Object.entries(refs)) {
      if (Array.isArray(list)) {
        list.forEach(item => refsData.push({ Справочник: key, ID: item.id, Название: item.name, Активен: item.active ? 'Да' : 'Нет' }));
      }
    }
    const refsWs = XLSX.utils.json_to_sheet(refsData);
    XLSX.utils.book_append_sheet(wb, refsWs, 'Справочники');

    XLSX.writeFile(wb, `Бистро24_${new Date().toISOString().slice(0,10)}.xlsx`);
  };
  return (
    <button className="btn btn-secondary" onClick={handleExport} style={{ marginBottom: 16 }}>
      <Download size={18} /> Выгрузить в Excel
    </button>
  );
}
