import moment from 'moment';


//Get visible expeneses
export default (expeneses, {text, sortBy, startDate , endDate}) => {
    return expeneses.filter((expense) => {
      const createAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment , 'day') : true ;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment , 'day') : true ;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a ,b) => {
      if (sortBy == 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      }else if (sortBy == 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    });
  };