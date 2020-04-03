import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpense from '../selectors/expenses';
import selectExpensesTotal from '../selectors/Expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100 ).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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