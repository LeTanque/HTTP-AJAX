import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="">
            <h1><Link to="/">Friends</Link></h1>
        </header>
    )
}

export default Header;