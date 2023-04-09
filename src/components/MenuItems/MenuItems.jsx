import React from 'react';
import Profile from '../../../public/img/profile1.jpg';

const MenuItems = () => {
    return (
        <div>
            <div className='bg-blue-50 md:flex md:justify-between px-5 md:px-28 items-center'>
                <div className=' md:w-80'>
                    
                    <h1 className='md:text-4xl'>One Step Closer To Your <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Dream Job</span> </h1>
                    
                    
                    <p className='mt-3 mb-6 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-blue-800 text-white rounded border px-4 py-3'>Get Started</button>
                </div>
                <div>
                    <img src={Profile} className='w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default MenuItems;