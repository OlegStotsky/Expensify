import { addExpense, removeExpense, editExpense } from '../../actions/expenses.js';

test('should setup remove expense object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('should setup add expense action with provided values', () => {
  const expenseData = {
    description: 'abcd',
    amount: 100,
    note: 'aaaa'
  };
  const id = 'abcd124';
  const action = editExpense(id, expenseData);
  expect(action).toEqual({ type: 'EDIT_EXPENSE', newParams: expenseData, id: id });
});

test('should setup default object for add expense action', () => {
  const action = addExpense();
  expect(action).toEqual({
     type: 'ADD_EXPENSE',
     expense: { 
       description:'', 
       note:'', 
       amount:0, 
       createdAt:0,
       id: expect.any(String)
     }
  });
})