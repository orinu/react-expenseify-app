import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../action/auth';

export const Header = ({ startLogout }) => (
    <header>
     <h1>Expend</h1>
     DashBoard - <NavLink to="dashboard" activeClassName="is-active" exact={true}>DashBoard</NavLink>
     Create - <NavLink to="/create" activeClassName="is-active" exact={true}>Create</NavLink>
     help - <NavLink to="/help" activeClassName="is-active">help</NavLink>
     <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);