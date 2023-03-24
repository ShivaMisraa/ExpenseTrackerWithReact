import './ExpenseItem.css';

function ExpenseDetails(props){
    
    const amount= props.amount;
    const location= props.location;

    return(
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'> Rs{amount}</div>
            <div className='expense-item__price'> {location}</div>
            </div>
    )
}
export default ExpenseDetails;




