import React from 'react';
import ReactDOM from 'react-dom'; 
import AppRouter from './routers/AppRouter.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addExpense({description: 'rent', amount: 500}));
store.dispatch(addExpense({description: 'water', amount: 200}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));