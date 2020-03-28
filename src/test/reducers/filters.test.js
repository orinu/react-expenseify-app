import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INTI'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'Rent'
    const state = filterReducer(undefined, { type: 'EDIT_TEXT_FILTER' , text});
    expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
    const date = moment(0);
    const state = filterReducer(undefined, { type: 'SET_START_DATE' , date});
    expect(state.startDate).toBe(date)
})

test('should set startDate filter', () => {
    const date = moment(0);
    const state = filterReducer(undefined, { type: 'SET_END_DATE' , date});
    expect(state.endDate).toBe(date)
})