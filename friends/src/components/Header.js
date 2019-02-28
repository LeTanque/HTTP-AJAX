import React, {Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserPlus, FaUserFriends } from 'react-icons/fa';

const Header = () => {
    // {FaUserPlus}{FaUserFriends}
    return (
        <Fragment>
            <header className="">
                <h1><Link to="/">Friends</Link></h1>
                <nav>
                    <NavLink to='/add-friend' > <FaUserPlus /> </NavLink>
                    <NavLink to='/friends'> <FaUserFriends /> </NavLink>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;