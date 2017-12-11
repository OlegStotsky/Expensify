import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    amount: 0,
    description: "",
    note: "",
    calendarFocused: false,
    createdAt: moment(),
    error: undefined
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    const amountRegExp = /^\d*(\.\d{0,2})?$/;
    if (amount.match(amountRegExp)) {
      this.setState(() => ({
        amount
      }));
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    });
  }

  onDateChange = (createdAt) => {
    if (!createdAt)
      return;
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="Add a note"
            onChange={this.onNoteChange}
            value={this.state.note}
            >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}