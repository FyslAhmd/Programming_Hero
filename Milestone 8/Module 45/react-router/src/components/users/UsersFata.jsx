import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../user/User';

const UsersFata = () => {
    const users =  useLoaderData();
    return (
        <div>
            <h1>This is Users page</h1>
            <div>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default UsersFata;