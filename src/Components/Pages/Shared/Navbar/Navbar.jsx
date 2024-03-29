import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";

const Navbar = () => {
  const {user,logOut} =useContext(AuthContext);
  const handelLogout =()=>{
    logOut()
    .then(()=>{
      
    })
    .then(error =>{
      console.log(error);
    })
  }

    const navlink = <>
    
    <li>
            <Link to={'/'}>Home</Link>
          </li>
          
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/career'}>Career</Link>
          </li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
            {navlink}

        </ul>
      </div>
      <div className="navbar-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full mr-1">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    {
      user ?
      
        <button onClick={handelLogout} className="btn">Log Out</button>
        
        :
        <Link to={'/login'}>
        <button className="btn">Login</button>
        </Link>
    }
        
      </div>

  );
};

export default Navbar;
