import React from 'react';

const AllInfo = () => {
    return (
        <div className="mx-5"> 
            <div className="max-w-screen-xl mx-auto py-20 bg-pink-700 rounded-lg ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <h2 className='text-2xl font-bold text-white'>1500+</h2>
                        <p className='text-xs text-white'>Candidates Hired</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <h2 className='text-2xl font-bold text-white'>200+</h2>
                        <p className='text-xs text-white'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <h2 className='text-2xl font-bold text-white'>50+</h2>
                        <p className='text-xs text-white'>Job Openings</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <h2 className='text-2xl font-bold text-white'>1000+</h2>
                        <p className='text-xs text-white'>Connection Made</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllInfo;