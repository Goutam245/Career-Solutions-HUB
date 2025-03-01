import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Root/Pages/Navbar';
import Footer from '../Root/Pages/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h2>Authlayout</h2> */}
            <Outlet></Outlet> 
            <Footer></Footer> 
        </div>
    );
};

export default AuthLayout;