import React from 'react';
import ReactDOM from 'react-dom'; 
import AppRouter from './routers/AppRouter.js';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));