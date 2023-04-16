import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props: any) => {

    if( props?.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found!</h2>
    }
    return (
        props?.expenses.map((item: any) => {
            return (
                <ul className='expenses-list'>
                    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
                </ul>
            )
        }))
}

export default ExpensesList;