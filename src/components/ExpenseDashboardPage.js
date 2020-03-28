import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFIlters'


const ExpenseDashbordPage = () => (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
     
    </div>
)

export default ExpenseDashbordPage;