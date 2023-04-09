import React from 'react';

const SingleCategory = ({category}) => {
    const{name,id,img,job}= category;
    return (
        <>
           <div className='bg-blue-50 p-7 w-60 h-40 '>
            <img className='w-20 h-10 ' src={img} alt="" />
            <h1 className='mt-1 text-xl font-serif font-semibold'>{name}</h1>
            <h1>{job} Jobs Available</h1>
           </div>
        </>
    );
};

export default SingleCategory;