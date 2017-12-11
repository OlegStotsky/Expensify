import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';

const ExpenseDashboardPage = () => (
  <div>
      <ExpenseListFilters />
      This is from my dashboard component
      <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;