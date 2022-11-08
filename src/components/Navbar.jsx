import React from 'react'
import './styles/Navbar.css'

import{NavLink}from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
     <NavLink to="/" className="navbar-logo"><img src={require("../E-removebg-preview.png")} alt="" style={{height:"3vw"}} /></NavLink>
     <div className='menu'>
         <ul>
                <NavLink to="/staff" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Staff</NavLink>
        </ul>
         <ul>
                <NavLink to="/student" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Student</NavLink>
        </ul>
        </div>
    </div>
  )
}

export default Navbar