import epensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';

test('should set default state' , () => {
    const state = epensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = epensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = epensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '123',
            amount: 1000,
            description: 'Adding New expense'
        }
    };
    const state = epensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 2000
        }
    };
    const state = epensesReducer(expenses, action);
    expect(state[1].amount).toBe(action.updates.amount);
});

test('Should not edit an expense, id not exist', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 2000
        }
    };
    const state = epensesReducer(expenses, action);
    expect(state).toEqual([...expenses]);
});
