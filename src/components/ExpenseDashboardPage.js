import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFIlters'
import ExpensesSummery from './ExpensesSummary';


const ExpenseDashbordPage = () => (
    <div>
      <ExpensesSummery />
      <ExpenseListFilters />
      <ExpenseList />
     
    </div>
)

export default ExpenseDashbordPage;