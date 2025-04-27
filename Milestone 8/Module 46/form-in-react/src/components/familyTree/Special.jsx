import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({assets}) => {
    const newAssets = useContext(AssetContext);
    return (
        <div className='border-2 m-3 p-3 rounded-lg bg-slate-500 text-white'>
            <h1>Special</h1>
            <h1>{assets}</h1>
            <h1>{newAssets}</h1>
        </div>
    );
};

export default Special;