import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import Login from './Login';
import WhoAmI from './WhoAmI';
import { logout } from 'APP/app/reducers/auth'

/* -----------------    COMPONENT     ------------------ */

export const Header = ({ user, logout }) => {
    return(
    
		<nav className="teal lighten-2" role="navigation">
			<div className="nav-wrapper container">
                <Link to="/" className="brand-logo">STREAM</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/Cuteness">Stream Cuteness</Link></li>
                    <li>{user ? user.name : <Link to="/login">Login / Sign Up</Link>}</li>
                        { user && <li><Link to="" onClick={ logout }>Logout</Link></li> }
                </ul>
            </div>
		</nav>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({auth}) => ({user: auth})
const mapDispatch = {logout}

export default connect(mapProps, mapDispatch)(Header)