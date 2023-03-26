// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const Expenses=[
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
      <h2>Let's get started</h2>      
      <expenses items={Expenses}/>
    </div>
    
  );
}

export default App;
