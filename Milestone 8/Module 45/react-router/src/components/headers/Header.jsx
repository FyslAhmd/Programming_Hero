import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='m-10 '>
                <NavLink className='mr-10 ' to='/'>Home</NavLink>
                <NavLink className='mr-10 ' to='/mobiles'>Mobiles</NavLink>
                <NavLink className='mr-10 ' to='/laptops'>Laptops</NavLink>
                <NavLink className='mr-10 ' to='/users'>Users</NavLink>
                <NavLink className='mr-10 ' to='/users2'>Users 2</NavLink>
            </nav>
        </div>
    );
};

export default Header;