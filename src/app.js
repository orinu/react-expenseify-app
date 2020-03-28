
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

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)


ReactDOM.render (jsx, document.getElementById('app'));

