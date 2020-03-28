import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <div>
     <h1>Expend</h1>
     DashBoard - <NavLink to="/" activeClassName="is-active" exact={true}>DashBoard</NavLink>
     Create - <NavLink to="/create" activeClassName="is-active" exact={true}>Create</NavLink>
     help - <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </div>
)

export default Header