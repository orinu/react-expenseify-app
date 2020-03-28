import {addExpense, editExpense, removeExpense } from '../../action/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value'} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note:  'New note value'}
    });
});

test('sould setup add expnse object with provided values' , () => {
    const expenseData = {
        description: 'Rent',
        note: 'Some note',
        amount: 1000,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('sould setup add expnse object with default values' , () => {
    const defaultExpense = addExpense();
    expect(defaultExpense).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          description: '',
          amount: 0,
          createdAt:0,
          note: ''
        }
        
    })
});