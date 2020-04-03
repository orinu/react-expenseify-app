import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';

test('Should render EpenseListItem with expenses', () => {
    // console.log({...expenses[0]})
    const warpper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(warpper).toMatchSnapshot();
});