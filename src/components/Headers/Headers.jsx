import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BeakerIcon ,Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

const Headers = () => {
    const [open,setOpen] =useState(false);
    return (
        <div>
            <nav className='flex relative md:flex justify-between items-start px-5 md:px-28 py-4'>
                <div>
                    <h3 className='text-2xl font-bold '>It Jobs</h3>
                </div>
                <ul className={`md:flex  absolute md:relative md:space-x-9 ${open ?'top-20 md:top-0 bg-blue-50 w-80 md:w-0 drop-shadow-sm md:drop-shadow-none border md:border-none  text-center py-4 md:py-0':'hidden'}`}>
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
                    to="/Applied-Jobs"
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
                    <button className='bg-blue-800 text-white rounded border px-3 py-2 md:px-4 md:py-3'>Star Applying</button>
                </div>
                <p className='md:hidden' onClick={()=>setOpen(!open)}
                >
                    {
                        open ?<XMarkIcon className="h-8 w-10 text-blue-500" />:<Bars3Icon className="h-8 w-10 text-blue-500" />
                    }
                 </p>

                    
            </nav>
        </div>
    );
};

export default Headers;