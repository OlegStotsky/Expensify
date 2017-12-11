import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses.js';

const ExpenseListItem = (props) => (
  <div>
    <ul>
      <Link to={`/edit/${props.expense.id}`}>Edit</Link>
      <li>Description: {props.expense.description}</li>
      <li>Amount: {props.expense.amount}</li>
      <li>Created at: {props.expense.createdAt}</li>
      <button onClick={() => {
        console.log('hello');
        props.dispatch(removeExpense(props.expense.id));
      }}>Remove</button>
    </ul>
  </div>
);

export default connect()(ExpenseListItem);