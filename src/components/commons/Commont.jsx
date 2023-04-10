import React from 'react';
import Headers from '../Headers/Headers';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Commont = () => {
    return (
        <div>
            <div className='bg-blue-50'>
            <Headers></Headers>
            </div>
            <ToastContainer />
            <Outlet></Outlet>
        </div>
    );
};

export default Commont;