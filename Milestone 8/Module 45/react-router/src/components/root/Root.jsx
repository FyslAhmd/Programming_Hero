import React from 'react';
import Header from '../headers/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div className='mx-10'>
            <Header></Header>
            <div className='flex gap-10'>
                <Sidebar></Sidebar>
                {
                    isNavigating ? <span>Loading.....</span> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;