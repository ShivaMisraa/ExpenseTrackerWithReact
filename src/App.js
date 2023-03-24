// import logo from "./logo.svg";
// import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses=[
    {id:"e1",
    title:"Car Insuarance", 
    ammount:294.67,
    date: new Date(2021,2,28),
    location:"Insuarance Ltd."},

    {id:"e2",
    title:"Toilet Paper",
    ammount:450.25, 
    date: new Date(2021,12,18),
    location:"City Kart"},

    {id:"e3",
    title:"Car Reapairing",
    ammount:685.57,
    date: new Date(2021,8,8),
  location:"Reapairing Center"},

    {id:"e4",
    title:"Buying Goods",
    ammount:805.01,
    date: new Date(2021,4,12),
  location:"City kart"},
  ];
  return (
    <div>
      
      <ExpenseItem
       title={expenses[0].title} 
       ammount={expenses[0].ammount} 
       date={expenses[0].date} 
       location={expenses[0].location}
       ></ExpenseItem> 
      <ExpenseItem 
      title={expenses[1].title}
       ammount={expenses[1].ammount}
        date={expenses[1].date} 
        location={expenses[1].location}
        ></ExpenseItem> 
      <ExpenseItem 
      title={expenses[2].title}
       ammount={expenses[2].ammount} 
       date={expenses[2].date}
       location={expenses[2].location} 
       ></ExpenseItem> 
      <ExpenseItem 
      title={expenses[3].title}
       ammount={expenses[3].ammount} 
       date={expenses[3].date} 
       location={expenses[3].location}
       ></ExpenseItem> 
            
    </div>
    
  );
}

export default App;
