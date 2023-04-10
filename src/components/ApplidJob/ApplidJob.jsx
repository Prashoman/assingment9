import React, { useEffect, useState } from 'react';
import ApplyJobShow from '../ApplyJobShow/ApplyJobShow';

const ApplidJob = () => {
    const [feature, setFeature ] = useState([]);
    const[updatefeuter, setUpdatefeature] = useState([]);
    
    useEffect(()=>{
        fetch("featured.json")
        .then(res => res.json())
        .then(data => setFeature(data))

        
    },[]);
    useEffect(() =>{
        const getStoredData =JSON.parse(localStorage.getItem('shopping-cart'));
        let storeNewData = []
        for (const id in getStoredData) {
            //console.log(id)
            const applayJobData = feature.find(data => data.id == id);
            if(applayJobData){
                storeNewData.push(applayJobData);
            }
            
        }
        
        setUpdatefeature(storeNewData)
    },[feature])
    console.log(updatefeuter)
    
    return (
        <div>
            <div className='bg-blue-50 w-full h-64 '>
                <h1 className='text-4xl text-center font-sans font-semibold p-24'>This Apply All job</h1>
            </div>
            <div className='px-28 mt-20'>
                {
                    updatefeuter.map(data => <ApplyJobShow key={data.id} showapllayjob ={data}></ApplyJobShow>)
                }
            </div>
        </div>
    );
};

export default ApplidJob;