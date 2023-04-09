import React, { useEffect, useState } from 'react';
import SingleFeature from '../SingleFeature/SingleFeature';

const FeaturedJobs = () => {
    const [feature, setFeature] = useState([]);
    useEffect(()=>{
        fetch("featured.json")
        .then(res => res.json())
        .then(data => setFeature(data))
    },[]);
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-sans font-semibold text-center'>Featured Jobs</h1>
            <p className='text-center mt-5 mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-2 gap-5 md:px-28'>
                {
                    feature.slice(0,4).map(sFeature => <SingleFeature key={sFeature.id} feature ={sFeature}></SingleFeature>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;