import React from 'react';
import Headers from '../Headers/Headers';
import { Outlet } from 'react-router-dom';

const Commont = () => {
    return (
        <div>
            <div className='bg-blue-50'>
            <Headers></Headers>
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Commont;