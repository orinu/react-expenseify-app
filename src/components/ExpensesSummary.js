import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpense from '../selectors/expenses';
import selectExpensesTotal from '../selectors/Expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100 ).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title ">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal} </span></h1>
                <div className="page-header__action">
                  <Link to="/create" className="button" >Add Expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleEzpenses = selectExpense(state.expenses, state.filters);
    return {
        expenseCount: visibleEzpenses.length,
        expensesTotal: selectExpensesTotal(visibleEzpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary)