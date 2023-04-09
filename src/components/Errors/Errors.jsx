import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errors = () => {
    const error = useRouteError();
    return (
        <div className='text-center'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Errors;