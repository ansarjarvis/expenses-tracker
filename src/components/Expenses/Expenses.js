import { useState } from "react"
import Card from "../Common UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css"
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p> No Expense Found </p>;
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => {
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        })
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {expenseContent}
        </Card>
    );
}

export default Expenses