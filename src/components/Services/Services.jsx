import React from 'react';

const Services = () => {
    return (
        <div className=""> 
            <div className="max-w-screen-xl mx-auto py-20 px-5 text-white">
                <h4 className='text-yellow-100'>How it Works</h4>
                <h1 className='text-2xl md:text-5xl py-8'>Our Simple Work Progress</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className='bg-gray-800 rounded-lg py-5 px-3 text-2xl font-bold text-gray-500'>
                        <h2 className='mb-5 mt-7 text-pink-700 text-7xl font-bold'>1</h2>
                        <h4 className="py-5 text-2xl font-bold text-white">Login Access</h4>
                        <p className="text-gray-300 text-[14px]">Employees log in to post updates, providing HR executive real-time workFlow visibility and insights</p>
                    </div>
                    <div className='bg-gray-800 rounded-lg py-5 px-3 gap-8 text-2xl font-bold text-gray-500'>
                        <h2 className='mb-5 mt-7 text-pink-700 text-7xl font-bold'>2</h2>
                        <h4 className='py-5 text-2xl font-bold text-white'>Login Access</h4>
                        <p className="text-gray-300 text-[14px]">Employees log in to post updates, providing HR executive real-time workFlow visibility and insights</p>
                    </div>
                    <div className='bg-gray-800 rounded-lg py-5 px-3 gap-3 text-2xl font-bold text-gray-500'>
                        <h2 className='mb-5 mt-7 text-pink-700 text-7xl font-bold'>3</h2>
                        <h4 className='py-5 text-2xl font-bold text-white'>Login Access</h4>
                        <p className="text-gray-300 text-[14px]">Employees log in to post updates, providing HR executive real-time workFlow visibility and insights</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;