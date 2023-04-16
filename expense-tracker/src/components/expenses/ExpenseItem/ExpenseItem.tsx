import Card from '../../UI/Card/Card';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props: any) {

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props?.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;