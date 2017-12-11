import React from 'react';

const ExpenseListItem = (props) => (
  <div>
    <ul>
      <li>Description: {props.expense.description}</li>
      <li>Amount: {props.expense.amount}</li>
      <li>Created at: {props.expense.createdAt}</li>
    </ul>
  </div>
);

export default ExpenseListItem;