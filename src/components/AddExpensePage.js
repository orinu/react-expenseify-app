import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../action/expenses';


const HomePage = (props) => (
    <div>
      <h1>Add</h1>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/')
        }}
      />
    </div>
)

export default connect()(HomePage);