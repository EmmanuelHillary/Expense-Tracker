import React, {useState} from 'react'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from "../UI/Card"
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")
    const filterChangeHandler = selectedYear => setFilteredYear(selectedYear)
    const expenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={expenses} />
            <ExpensesList expenses={expenses} />
        </Card>
    )
}

export default Expenses