import React, { createContext } from 'react';
import Grandpa from './Grandpa';

export const AssetContext = createContext('');

const FamilyTree = () => {
    const assets = 'Diamond';
    const newAssets = 'Gold';
    return (
        <div className='border-2 m-3 p-3 rounded-lg w-1/2 mx-auto text-center'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAssets}>
            <Grandpa assets={assets} className='border-2 m-3 p-3 rounded-lg'></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;