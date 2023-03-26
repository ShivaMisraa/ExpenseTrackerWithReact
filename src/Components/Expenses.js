import ExpenseItem from "./Components/ExpenseItem";
import './Expenses.css'
import './Card'
import Card from "./Card";
function Expenses(props){
    return(
<Card className="Expenses">
<ExpenseItem
       title={props.item[0].title} 
       amount={props.item[0].amount} 
       date={props.item[0].date} 
       location={props.item[0].location}
       />
      <ExpenseItem 
      title={props.item[1].title}
       amount={props.item[1].amount}
        date={props.item[1].date} 
        location={props.item[1].location}
        /> 
      <ExpenseItem 
      title={props.item[2].title}
       amount={props.item[2].amount} 
       date={props.item[2].date}
       location={props.item[2].location} 
       /> 
      <ExpenseItem 
      title={props.item[3].title}
       amount={props.item[3].amount} 
       date={props.item[3].date} 
       location={props.item[3].location}
       />
</Card>
    );
}
export default Expenses;