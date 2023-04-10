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
    //handle On Time section
    const handleOnTime = () =>{
       const filterFulltime=  feature.filter(data =>  data.optiontwo === 'Ontime') 
       setUpdatefeature(filterFulltime)
    }
    //full-time handeler
    const handleFullTime = () =>{
        const filterFulltime=  feature.filter(data =>  data.optionone === 'Fulltime')
        setUpdatefeature(filterFulltime)
    }

    //part-time handeller
    const handlePartTime = () =>{
        const filterFulltime=  feature.filter(data =>  data.optiontwo === 'PartTime') 
       setUpdatefeature(filterFulltime)
    }
    return (
        <div>
            <div className='bg-blue-50 w-full h-64 '>
                <h1 className='text-4xl text-center font-sans font-semibold p-24'>This Apply All job</h1>
            </div>
            <div>
                <div className='mt-10 mb-4 space-x-3 px-28'>
                    <button onClick={handleOnTime} className="btn btn-outline btn-info">On-Time</button>
                    <button onClick={handleFullTime} className="btn btn-outline btn-success">full-time</button>
                    <button onClick={handlePartTime} className="btn btn-outline btn-warning">part-time</button>
                    
                </div>
                <div className='px-28 mt-20'>
                    {
                        updatefeuter.map(data => <ApplyJobShow key={data.id} showapllayjob ={data}></ApplyJobShow>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ApplidJob;