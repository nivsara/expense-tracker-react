import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmt, setEnteredAmt] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const dateObj = {
        dateMin : "2019-01-01",
        dateMax: "2023-12-31"
    }

    const titleChangeHandler = (event: any) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event: any) => {
        setEnteredAmt(event.target.value);
    }

    const dateChangeHandler = (event: any) => {
        setEnteredDate(event.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control ">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control ">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control ">
                    <label>Date</label>
                    <input type="date"  min={dateObj.dateMin} max={dateObj.dateMax} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    );
}

export default ExpenseForm;