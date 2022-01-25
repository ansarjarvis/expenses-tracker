import { useState } from "react"
import "./ExpenseForm.css"

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {

            title: enteredTitle,
            amount: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setEnteredTitle("")
        setEnteredPrice("")
        setEnteredDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="tilte">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" min="1" value={enteredPrice} onChange={priceChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancle}>Cancle</button>
                <button>add expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm