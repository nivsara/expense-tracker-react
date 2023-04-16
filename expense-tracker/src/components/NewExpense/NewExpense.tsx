import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props: any) => {
    const expenseSubmitHandler = (data: any) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return (
    <div className="new-expense">
        <ExpenseForm onExpenseSubmit={expenseSubmitHandler}/>
    </div>
    );
}

export default NewExpense;