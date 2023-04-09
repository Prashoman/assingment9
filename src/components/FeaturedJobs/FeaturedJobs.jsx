import React, { useEffect, useState } from 'react';
import SingleFeature from '../SingleFeature/SingleFeature';

const FeaturedJobs = () => {
    const [feature, setFeature] = useState([]);
    
    const [sliceFeu, setSliceFeu] = useState([]);
    const[show ,setShow] = useState(false);
     
    
    // setSliceFeu(sliceFrout);
    useEffect(()=>{
        fetch("featured.json")
        .then(res => res.json())
        .then(data => setFeature(data))
    },[]);
    useEffect(() =>{
        const sliceFrout = feature.slice(0,4);
        setSliceFeu(sliceFrout)
    },[feature]);
    const handleSliceAll =()=>{
        setShow(!show);
        setSliceFeu(feature);
    }
    //console.log(sliceFeu)
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-sans font-semibold text-center'>Featured Jobs</h1>
            <p className='text-center mt-5 mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-2 gap-5 md:px-28'>
                {
                    sliceFeu.map(sFeature => <SingleFeature key={sFeature.id} feature ={sFeature}></SingleFeature>)
                }
            </div>
            {
                show || <div className='text-center'>
                
                    <button onClick={handleSliceAll} className='bg-blue-800  text-white rounded border px-3 py-2 mt-7'>Star Applying</button>
                </div>
            }
            
            </div>
    );
};

export default FeaturedJobs;