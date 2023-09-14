import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expenseMain.css";

function ExpenseMain(props) {
  return (
    <div className="expenses">
      <ExpenseItem expense={props.expense[0]} />
      <ExpenseItem expense={props.expense[1]} />
      <ExpenseItem expense={props.expense[2]} />
    </div>
  );
}

export default ExpenseMain;
