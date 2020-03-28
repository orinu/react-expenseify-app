
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './action/expenses';
import {setTextFilter} from './action/filters';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description:'water bill', amount:500}))
store.dispatch(addExpense({description:'gass Bill', createdAt:1000}))
store.dispatch(addExpense({description:'rent', amount:700} ))
store.dispatch(setTextFilter( '' ));
const state = store.getState();
console.log(getVisibleExpense(state.expenses,state.filters));

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)


ReactDOM.render (jsx, document.getElementById('app'));

