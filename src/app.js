
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter,  {history} from './routes/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './action/expenses';
import { login, logout } from './action/auth';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from  './firebase/firebase'
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

let hasRenderd = false;
const renderApp = () => {
    if (!hasRenderd) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRenderd = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
    

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
          renderApp();
          console.log('uid', user.uid);
          if (history.location.pathname === '/') {
              history.push('/dashboard');
          }
        });
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});