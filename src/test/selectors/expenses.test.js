import selectorExpenses from '../../selectors/expenses.js';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount:196,
    createdAt:0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount:1000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'CreditCard',
    note: '',
    amount: 2000, 
    createdAt: moment(0).add(4, 'days').valueOf()
}]

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