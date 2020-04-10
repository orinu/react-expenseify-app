import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../action/auth';

export const LoginPage = ({startLogin}) =>  (
        <div>
            <h1>Log In</h1>
            <button onClick={startLogin}>LogIn</button>
        </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

