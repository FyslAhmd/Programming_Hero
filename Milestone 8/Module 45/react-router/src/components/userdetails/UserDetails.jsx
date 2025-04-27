import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const nevigate =  useNavigate();
    const handleNavigate = () => {
        nevigate(-1);
    }
    return (
        <div className='space-y-4'>
            <h3>User Details</h3>
            <h5>Name : {user.name}</h5>
            <h5>Email : {user.email}</h5>
            <h5>Phone : {user.phone}</h5>
            <h5>Website : {user.website}</h5>
            <button className='text-black bg-white p-2 rounded' onClick={handleNavigate}>Go Back</button>

        </div>
    );
};

export default UserDetails;