import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props: any) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmt: '',
        enteredDate: ''
    });

    const dateObj = {
        dateMin : "2019-01-01",
        dateMax: "2023-12-31"
    }

    const titleChangeHandler = (event: any) => {
        setUserInput((prevState: any) => {
            return ({
                ...prevState,
                enteredTitle: event.target.value
            })
        });
    }

    const amountChangeHandler = (event: any) => {
        setUserInput((prevState: any) => {
            return ({
                ...prevState,
                enteredAmt: event.target.value
            })
        });
    }

    const dateChangeHandler = (event: any) => {
        setUserInput((prevState: any) => {
            return ({
                ...prevState,
                enteredDate: event.target.value
            })
        });
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        const expenseData = {
            title: userInput?.enteredTitle,
            amount: userInput?.enteredAmt,
            date: new Date(userInput?.enteredDate)
        }
        props.onExpenseSubmit(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmt: '',
            enteredDate: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control ">
                    <label>Title</label>
                    <input type="text" value={userInput?.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control ">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput?.enteredAmt} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control ">
                    <label>Date</label>
                    <input type="date"  min={dateObj.dateMin} max={dateObj.dateMax} value={userInput?.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    );
}

export default ExpenseForm;