import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {MapPinIcon,CurrencyDollarIcon, CalendarIcon,PhoneIcon, InboxIcon } from '@heroicons/react/24/solid';



const JobDetails = () => {
    const load = useLoaderData();
    const pramsId = useParams();
    
     const [details , setDetails] = useState({});

    useEffect(() => {
        if(load){
            const findDetails = load.find(data => data.id == pramsId.id);
            setDetails(findDetails)
        }
        //setDetails(load)
    },[])
    //  console.log(details)
    

    // const findDetails = load.find(data => data.id ==pramsId.id);

    const handleSetJobId = (id) =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = true;
    }
    else {
        alert("already insert");
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
    //console.log(findDetails);
    return (
        <div>
            <div className='bg-blue-50 w-full h-64 '>
                <h1 className='text-4xl text-center font-sans font-semibold p-24'>This is information of job details</h1>
            </div>
            <div  className='w-full md:flex px-3 md:px-28 mt-11 mb-10'>
                <div className='w-full h-auto space-y-3'>
                    <p> <span className='font-semibold'>Description</span>  : {details.jobdescription}</p>
                    <p> <span className='font-semibold'>Job Responsibility</span>  : {details.jobresponsible}</p>
                    <h1> <span className='font-semibold'>Educational Requirements</span> :</h1>
                    <p>{details.education}</p>
                    <h1> <span className='font-semibold'>Experiences</span>  :</h1>
                    <p>{details.experiences}</p>
                </div>
                <div className=' w-full md:w-96'>
                    <div className=' bg-blue-50 p-3 h-auto space-y-4'>
                    <h1 className='text-2xl mb-2 font-sans font-semibold'>Job Details:</h1>
                    <hr />
                    <p className='flex mt-2'><CurrencyDollarIcon className="h-6 w-9  text-blue-600" /><span className=' font-sans font-semibold'>Salary </span> : {details.salary}</p>
                    <p className='flex mt-2'><CalendarIcon className="h-6 w-9 text-blue-600" /> <span className=' font-sans font-semibold'>Job</span> : {details.jobtittle}</p>

                    <h1 className='text-2xl font-semibold'>Contact Information</h1>
                    <hr />
                    <p className='flex'><PhoneIcon className="h-6 w-9 text-blue-600" /> <span className=' font-sans font-semibold'>Phone </span> : {details.phone}</p>
                    <p className='flex'><InboxIcon className="h-6 w-9 text-blue-600" /> <span className=' font-sans font-semibold'>Email </span> : {details.email}</p>
                    <p className='flex'><MapPinIcon className="h-6 w-9 text-blue-600" /> <span className='font-sans font-semibold'>Address  </span> : {details.address}</p>
                    </div>
                    
                    <div className='w-full mt-8'>
                        <button onClick={() => handleSetJobId(details.id)} className=' w-full bg-blue-800 text-white rounded border px-3 py-2 md:px-4 md:py-3'>Apply Now</button>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default JobDetails;