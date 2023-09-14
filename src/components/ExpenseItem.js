import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseitems.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
      </div>
      <div className="expense-item__price">${props.expense.amount}</div>
    </div>
  );
}

export default ExpenseItem;
