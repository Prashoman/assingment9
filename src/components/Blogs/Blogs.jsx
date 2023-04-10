import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2 gap-4 px-28 mt-16 mb-14'>
            <div className='w-full p-3 h-64 border  bg-blue-50'>
                <h1 className='text-2xl font-bold'>When should you use contexApi?</h1>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application</p>
            </div>
            <div className='w-full p-3 h-64 border  bg-blue-50' >
                <h1 className='text-2xl font-bold'>What is custom hook?</h1>
                <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</p>
            </div>
            <div className='w-full p-3 h-64 border  bg-blue-50'>
                <h1 className='text-2xl font-bold'>how to use useRef?</h1>
                <p>useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component. 
                The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section. 
                Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component</p>
            </div>
            <div className='w-full p-3 h-64 border  bg-blue-50'>
                <h1 className='text-2xl font-bold'>how to  use useMemo?</h1>
                <p>useMemo in React is essential react hook for improving the performance and speed of your application by caching the output in the computer memory and returning it when the same input is given again.
                So how does this hook works in ReactJs? Let’s use a real-life example to explain this concept. Assuming that your high school teacher asked you for the total number of students in your class, you counted the students and told him that it was 50.</p>
            </div>
        </div>
    );
};

export default Blogs;