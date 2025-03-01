import React from 'react';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <section><Outlet></Outlet> </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;