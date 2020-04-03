import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFIlters  } from '../../components/ExpenseListFIlters';
import { filters, altFilters } from '../fixture/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFIlters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    )
});

test('Should render ExpenseListFIlters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFIlters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle sort by date', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

test('should handle text change', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
      });
    expect(sortByDate).toHaveBeenCalled();
  });


test('should handle text amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
      });
    expect(sortByAmount).toHaveBeenCalled();
  });

test('Should handale date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handel date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });