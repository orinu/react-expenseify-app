import {setTextFilter, sortByDate, sortByAmount ,setStartDate, setEndDate } from '../../action/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:  'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:  'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate sortbydate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})
test('should generate text filter action object with provieded text', () => {
    const text = 'Rent'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text
    })
})
test('should generate text filter action object with default', () => {
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text:''
    })
})