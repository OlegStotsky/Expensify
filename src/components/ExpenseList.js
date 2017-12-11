import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import selectExpenses from '../selectors/expenses.js';

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.map((expense) => <ExpenseListItem key={expense.id} expense={expense} />)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);