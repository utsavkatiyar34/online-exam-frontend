import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Staffnavbar.css';

const Studentnavbar = () => {
  return (
    <div className='staffnav-wrapper'>
        <div className='staffnav-menu'>
         <ul>
                <NavLink to="/student/login"  className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Login</NavLink>
        </ul>
        <ul>
                <NavLink to="/student/register" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Register</NavLink>
        </ul>
        <ul>
                <NavLink to="/student/subscriptions" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Subscriptions</NavLink>
        </ul>
        <ul>
                <NavLink to="/student/courses" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Courses</NavLink>
        </ul>
        </div>
    </div>
  )
}

export default Studentnavbar