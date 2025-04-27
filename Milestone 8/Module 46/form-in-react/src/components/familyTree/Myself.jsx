import React from 'react';
import Special from './Special';

const Myself = ({assets}) => {
    return (
        <div className='border-2 m-3 p-3 rounded-lg'>
            <h2>Myself</h2>
            <Special assets={assets}></Special>
        </div>
    );
};

export default Myself;