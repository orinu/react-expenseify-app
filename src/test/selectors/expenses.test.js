import selectorExpenses from '../../selectors/expenses.js';
import moment from 'moment';
import expenses from '../fixture/expenses';


test('should fiter by text value', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectorExpenses(expenses, filter);
    expect(result).toEqual([ expenses[2],expenses[1] ])
});

test('should fiter by start date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectorExpenses(expenses, filter);
    expect(result).toEqual([ expenses[2],expenses[0] ])
});

test('should fiter by end date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectorExpenses(expenses, filter);
    expect(result).toEqual([ expenses[0],expenses[1] ])
});

test('should fiter by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectorExpenses(expenses, filter);
    expect(result).toEqual([ expenses[2],expenses[0],expenses[1] ])
});

test('should fiter by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectorExpenses(expenses, filter);
    expect(result).toEqual([ expenses[2],expenses[1],expenses[0] ])
});