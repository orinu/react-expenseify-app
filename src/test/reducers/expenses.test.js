import epensesReducer from '../../reducers/expenses';

test('should set default state' , () => {
    const state = epensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})