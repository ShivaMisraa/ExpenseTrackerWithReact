import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isEditing, setIsEditing]= useState("");

  // const [userInput, setUserInput]= useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=>{
    // return {...prevState, enteredTitle:event.target,value};
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value,

    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    
    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsEditing(false);
  };
  
  const startEditingHandler=()=>{
    setIsEditing(true)
  }

  const stopEditing=()=>{
    setIsEditing(false);
  }

  if (isEditing){
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2023-04-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div><br/>
      <div className="new-expense__actions">
        <button type="cancel" onClick={stopEditing}>Cancel</button>
      </div>


    </form>
  );
} else {
  return(
    <div className="new-expense__actions">
        <button type="button" onClick={startEditingHandler}>
          Add Expense
        </button>
      </div>
  )
}
};
export default ExpenseForm;