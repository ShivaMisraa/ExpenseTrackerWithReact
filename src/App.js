// import logo from "./logo.svg";
// import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses=[
    {id:"e1",
    title:"Car Insuarance", 
    amount:294.67,
    date: new Date(2021,2,28),
    location:"Insuarance Ltd."},

    {id:"e2",
    title:"Toilet Paper",
    amount:450.25, 
    date: new Date(2021,12,18),
    location:"City Kart"},

    {id:"e3",
    title:"Car Reapairing",
    amount:685.57,
    date: new Date(2021,8,8),
  location:"Reapairing Center"},

    {id:"e4",
    title:"Buying Goods",
    amount:805.01,
    date: new Date(2021,4,12),
  location:"City kart"},
  ];
  return (
    <div>
      
      <ExpenseItem
       title={expenses[0].title} 
       amount={expenses[0].amount} 
       date={expenses[0].date} 
       location={expenses[0].location}
       />
      <ExpenseItem 
      title={expenses[1].title}
       amount={expenses[1].amount}
        date={expenses[1].date} 
        location={expenses[1].location}
        /> 
      <ExpenseItem 
      title={expenses[2].title}
       amount={expenses[2].amount} 
       date={expenses[2].date}
       location={expenses[2].location} 
       /> 
      <ExpenseItem 
      title={expenses[3].title}
       amount={expenses[3].amount} 
       date={expenses[3].date} 
       location={expenses[3].location}
       />
            
    </div>
    
  );
}

export default App;
