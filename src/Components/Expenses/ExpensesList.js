import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback"> Found no expense! </h2>;
  }
   else if (props.items.length === 1) {
    return (
      <ul className="expense-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          >
          </ExpenseItem>
        ))}
        <h2 className="expense-list__fallback"> Only single Expense here. Please add more... </h2>
      </ul>
    );
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
