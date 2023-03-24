import './ExpenseItem.css';

function ExpenseDetails(props){
    const ammount= props.ammount;
    const location= props.location;

    return(
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs {ammount}</div>
            <div className='expense-item__price'> {location}</div>
            </div>
    )
}
export default ExpenseDetails;




