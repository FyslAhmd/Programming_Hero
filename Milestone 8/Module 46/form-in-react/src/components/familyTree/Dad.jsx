import React from 'react';
import Myself from './Myself';
import Borther from './Borther';
import Sister from './Sister';

const Dad = ({assets}) => {
    return (
        <div className='border-2 m-3 p-3 rounded-lg'>
            <h2>Dad</h2>
            <section className='flex'>
                <Myself assets={assets}></Myself>
                <Borther></Borther>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;