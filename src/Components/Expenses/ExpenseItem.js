import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };
  // const clickToAmount = () => {
  //   setAmount("100");
  //   console.log(amount);
  // };

  return (
    <li>
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">Rs{amount}</div>

        {/* <button onClick={clickToAmount}>Change amount</button>
        <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
