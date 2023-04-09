import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <nav className='md:flex justify-between items-start px-5 md:px-28 py-4'>
                <div>
                    <h3 className='text-2xl font-bold '>It Jobs</h3>
                </div>
                <ul className='md:flex md:space-x-9'>
                    <li><NavLink
                        to="/"
                        className={({ isActive }) =>
                        isActive ? "text-yellow-900" : ""} >
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/Statistics"
                    className={({ isActive }) =>
                      isActive ? "active" : ""} >
                   Statistics
                  </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/Applied Jobs"
                    className={({ isActive }) =>
                      isActive ? "active" : ""} >
                   Applied Jobs
                  </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/Blogs"
                    className={({ isActive }) =>
                      isActive ? "active" : ""} >
                   Blog
                  </NavLink>
                    </li>
                
                  
                  
                  
                </ul>
                <div>
                    <button className='bg-blue-800 text-white rounded border px-4 py-3'>Star Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Headers;