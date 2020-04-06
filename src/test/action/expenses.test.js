import configureMokeStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../action/expenses';
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMokeStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});

    const expenseDate = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseDate)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDate
            }
        });
        database.ref(`expenses/${action[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDate);
            done();
        })
        
    })
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});

    const defaultValue = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      };

    store.dispatch(startAddExpense( {} )).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultValue
            }
        });
        database.ref(`expenses/${action[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultValue);
            done();
        })
        
    })
});

// test('sould setup add expnse object with default values' , () => {
//     const defaultExpense = addExpense();
//     expect(defaultExpense).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//           id: expect.any(String),
//           description: '',
//           amount: 0,
//           createdAt:0,
//           note: ''
//         }
        
//     })
// });