import './ExpenseItem.css';
function ExpenseItem() {
    const expenseDate = new Date(2023,2,23);
    const expenseTitle="Food";
    const ExpenseAmmount= 10;

  return (
    <div className='expense-item'>
        <div> {expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>Rs {ExpenseAmmount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
