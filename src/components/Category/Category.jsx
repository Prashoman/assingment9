import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('categorys.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }
    ,[]);
    return (
        <>

            <div>
                <h1 className='text-3xl font-serif font-semibold text-center mt-7'>Job Category List</h1>
                <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mb-6 mt-4 flex justify-between items-center px-28'>
                {
                    category.map(sCategory => <SingleCategory key={sCategory.id} category={sCategory}></SingleCategory>)
                }
            </div>
       </>
    );
};

export default Category;