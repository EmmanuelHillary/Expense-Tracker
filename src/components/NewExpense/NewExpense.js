import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
     const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    const saveExpenseData = (formData) => {
        const expenseData = {...formData, id:Math.random().toString()}
        props.onGetSavedData(expenseData)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCloseForm={stopEditingHandler} />}
        </div>
    )

}

export default NewExpense