import { useState } from 'react';
import Card from '../UI/Card/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';

function Expenses(props: any) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onYearSelectedHandler = (year: any) => {
        setFilteredYear(year);
    }

    const filteredYrData = props.expenses.filter((item: any) => {
        return item.date.getFullYear() === +filteredYear;
    });

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter onYearSelected={onYearSelectedHandler} selectedYr={filteredYear} />
                <ExpensesList expenses={filteredYrData}/>
            </Card>
        </>
    )
}

export default Expenses;