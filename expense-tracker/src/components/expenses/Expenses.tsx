import { useState } from 'react';
import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

function Expenses(props: any) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onYearSelectedHandler = (year: any) => {
        setFilteredYear(year);
    }

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter onYearSelected={onYearSelectedHandler} selectedYr={filteredYear}/>
                {props?.expenses.map((item: any) => {
                    return (
                        <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date} />
                    )
                })}
            </Card>
        </>
    )
}

export default Expenses;