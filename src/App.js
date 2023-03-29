// import logo from "./logo.svg";
// import "./App.css";

import React from "react";
import Expenses from "./Components/Expenses";
// import './Components/ExpenseDate';
// import './Components/ExpenseDetails';
import "./Components/ExpenseItem";
// import './Components/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insuarance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Insuarance Ltd.",
    },

    {
      id: "e2",
      title: "Toilet Paper",
      amount: 450.25,
      date: new Date(2021, 12, 18),
      location: "City Kart",
    },

    {
      id: "e3",
      title: "Car Reapairing",
      amount: 685.57,
      date: new Date(2021, 8, 8),
      location: "Reapairing Center",
    },

    {
      id: "e4",
      title: "Buying Goods",
      amount: 805.01,
      date: new Date(2021, 4, 12),
      location: "City kart",
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
