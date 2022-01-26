import { useState } from "react"
import Card from "../Common UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css"


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpenseList items={filteredExpenses}></ExpenseList>
            </Card>
        </div>
    );
}

export default Expenses