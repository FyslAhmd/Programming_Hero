import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink className='mr-4' to='/'>Home</NavLink>
                <NavLink className='mr-4' to='/login'>Login</NavLink>
            </ul>
        </nav>
    );
};

export default Header;