import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errors = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center border shadow-sm w-80 p-10 h-auto'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
        
    );
};

export default Errors;