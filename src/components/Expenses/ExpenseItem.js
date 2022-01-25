import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Common UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle("UPDATED")
        console.log("you clicked")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2> {title} </h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>click me</button>
            </div>
        </Card>
    )
}


export default ExpenseItem;
