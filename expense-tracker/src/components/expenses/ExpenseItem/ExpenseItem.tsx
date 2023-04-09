import { useState } from 'react';
import Card from '../../UI/Card/Card';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props: any) {

    const [title, setTitle] = useState(props?.title);

    const clickHandler = (value: any) => {
            setTitle('updated');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change</button>
        </Card>
    )
}

export default ExpenseItem;