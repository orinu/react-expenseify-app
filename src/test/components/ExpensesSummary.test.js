import React from 'react';
import {ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';


test('Should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpenseSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotalU={235456465} />);
    expect(wrapper).toMatchSnapshot();
});