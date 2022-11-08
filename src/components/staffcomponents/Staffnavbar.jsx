import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Staffnavbar.css';

const Doctornavbar = () => {
  return (
    <div className='staffnav-wrapper'>
        <div className='staffnav-menu'>
         <ul>
                <NavLink to="/staff/login"  className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Login</NavLink>
        </ul>
        <ul>
                <NavLink to="/staff/register" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Register</NavLink>
        </ul>
        <ul>
                <NavLink to="/staff/add-course" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Add Course</NavLink>
        </ul>
        <ul>
                <NavLink to="/staff/students" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Students</NavLink>
        </ul>
        <ul>
                <NavLink to="/staff/courses" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Courses</NavLink>
        </ul>
        </div>
    </div>
  )
}

export default Doctornavbar