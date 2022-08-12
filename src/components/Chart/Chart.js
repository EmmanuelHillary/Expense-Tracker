import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const arrayAmount = props.expenseData.map(data => data.value);
    let totalAmount = arrayAmount.reduce((a, b) => (a + b), 0)
    return (<div className='chart'>
        {props.expenseData.map(data => {
           return <ChartBar
            key={data.label}
            value={data.value}
            totalAmount={totalAmount}
            label={data.label}
            />
        })}
    </div>)

}

export default Chart;