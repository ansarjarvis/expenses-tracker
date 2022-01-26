import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return (<h2 className="expenses-list__fallback">Found No Expense</h2>)
    }

    return (
        <div>
            <ul className="expense-list">
                {
                    props.items.map((expense) => {
                        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                    })
                }
            </ul>
        </div>

    );
}

export default ExpenseList;