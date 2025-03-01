import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    const links = <>
    <li><NavLink to="/">Home</NavLink> </li>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/profile">Profile</NavLink></li>
    <li><NavLink to="/appointment">Appointment</NavLink></li>
    {/* <li><NavLink to="/login">Log In</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-base-100 md:w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div><img className='w-16' src="https://i.ibb.co.com/BHRM79GY/download.png" alt="" /> </div>
    <a className="btn btn-ghost text-xl font-mono ">CareerHUB</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
    { links }
    </ul>
  </div>
  <div className="navbar-end">
     {/* Display user image or email */}
     {user && user.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        ) : null}

    <div className='gap-1 px-4'><p>{user && user.email} </p></div>
    
  {/* <button><NavLink to="/auth/login"> {user && user.name ? user.name : "Log In"}</NavLink></button> */}
{
  user && user?.email? <button className='btn btn-primary' onClick={logOut}> Log Out
  
  </button>
  
  : <button className='btn btn-accent'><NavLink to="/auth/login"> 
  Log In</NavLink>
  
  </button>

}


 
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
};

export default Navbar;