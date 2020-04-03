import selectEpensesTotal from '../../selectors/Expenses-total';
import expenses from '../fixture/expenses';

test('Should return 0 if no expenses', () => {
    const res = selectEpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const res = selectEpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
});

test('Should correctly add up a multiple expenses', () => {
    const res = selectEpensesTotal(expenses);
    let totalAmount = 0;
    for (let i=0; i<expenses.length; i++){
        totalAmount += expenses[i].amount;
    }
    expect(res).toBe(totalAmount);
});