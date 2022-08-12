import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // using multiple states
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    // using one state
    // const [userInput, enteredUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        // multiple state
        setEnteredTitle(event.target.value)
        // one state
        // enteredUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        // multiple state
        setEnteredAmount(event.target.value)
        // one state
        // enteredUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
    }

    const  dateChangeHandler = (event) => {
        // multiple state
        setEnteredDate(event.target.value)
        // one state
        // enteredUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        const formData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(formData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01"  step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2016-01-01"  max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCloseForm}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm