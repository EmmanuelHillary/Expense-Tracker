import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.obj.date} />
      <div className='expense-item__description'>
        <h2>{props.obj.title}</h2>
        <div className='expense-item__price'>${props.obj.amount}</div>
      </div>
    </Card>
    </li>
  );
}



export default ExpenseItem;
