
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData)
        setIsEditing(false)
    }


    const showExpenseFormHandler = () => {
        setIsEditing(true)
    }

    const cancleExpenseEditingHandler = () => {
        console.log("click")
        setIsEditing(false)
    }

    return (

        <div className="new-expense">
            {!isEditing && <button onClick={showExpenseFormHandler}>Add new Expense</button>}

            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} OnCancle={cancleExpenseEditingHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;