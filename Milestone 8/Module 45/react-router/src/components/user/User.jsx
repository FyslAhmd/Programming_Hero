import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    
    return (
        <div className='border-2 border-gray-500 p-5 m-5 rounded-lg'>
            <h3>{user.name}</h3>
            <h4 className='my-2'>Email: {user.email}</h4>
            <Link className='text-black bg-white p-2 rounded' to={`/users/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;