import React from 'react';
import {MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ApplyJobShow = ({showapllayjob}) => {
    const {optionone,optiontwo,img,jobtittle,name,id,option,salary,address} = showapllayjob;
    return (
        <div>
            <div className='w-full h-auto text-center md:flex justify-between items-start  mt-3  border p-3'>
                    <div>
                        <img className='w-48 h-32 text-center  md:w-60 md:h-40' src={img} alt="" />
                    </div>
                <div>
                    <h1 className='md:text-3xl font-semibold font-serif mt-2'>{jobtittle}</h1>
                    <p className='md:text-xl mt-2'>{name}</p>
                    <div className=''>
                        <button className="btn btn-outline btn-success ml-2">{optiontwo}</button>
                        <button className="btn btn-outline btn-success ml-2">{optionone}</button>
                    
                    </div>
                    <div className='flex mt-3 justify-start items-center'>
                        <p className='flex'><MapPinIcon className="h-6 w-9 text-black" />: {address}</p>
                        <p className='flex'><CurrencyDollarIcon className="h-6 w-9 text-black" /> Salary : {salary}</p>
                    </div>
                </div>
                
            <Link to={`/details/${id}`}><button className='bg-blue-800 text-white rounded border px-3 py-2 mt-3'>View Details</button></Link> 
            
            </div>
        </div>
    );
};

export default ApplyJobShow;