import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount:196,
    createdAt: 0
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
