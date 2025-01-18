import React from 'react';
import { CiStar } from "react-icons/ci";

const Testimonials = () => {
    return (
        <div className="bg-black">
            <div className="max-w-screen-xl mx-auto py-20 px-5 text-white">
                <div className='text-center'>
                    <h4 className='text-yellow-100'>Streamline HR Operations</h4>
                    <h1 className='text-2xl md:text-5xl py-8'>Empower Your Workforce</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className='flex flex-col gap-4 bg-gray-800 rounded-lg py-5 px-4 text-2xl font-bold items-center justify-center'>
                        <img className='w-24 h-24 rounded-full' src="https://instantglamour.com/wp-content/uploads/photo-gallery/IMG_2002-pp-b.jpg" alt="" />
                        <h2>Alexander Ljung</h2>
                        <p className='text-xs text-white'>New Work</p>
                        <div className='flex gap-2 text-yellow-600 text-xl'>
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                        </div>
                        <span className='bg-black py-1 px-2 rounded-md text-white text-[14px]'>Marketing</span>
                        <button className='bg-pink-300/60 py-2 px-4 text-xs rounded-md'>Learn More</button>
                    </div>
                    <div className='flex flex-col gap-4 bg-gray-800 rounded-lg py-5 px-4 text-2xl font-bold items-center justify-center'>
                        <img className='w-24 h-24 rounded-full' src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/6b39933e-73ad-4b24-965c-17884b5a8e77/be9da804-63a0-4d5c-8a09-af29209133ce.png" alt="" />
                        <h2>Jason Bailey</h2>
                        <p className='text-xs text-white'>San Francisco</p>
                        <div className='flex gap-2 text-yellow-600 text-xl'>
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                        </div>
                        <span className='bg-black py-1 px-2 rounded-md text-white text-[14px]'>Development</span>
                        <button className='bg-pink-300/60 py-2 px-4 text-xs rounded-md'>Learn More</button>
                    </div>
                    <div className='flex flex-col gap-4 bg-gray-800 rounded-lg py-5 px-4 text-2xl font-bold items-center justify-center'>
                        <img className='w-24 h-24 rounded-full' src="https://instantglamour.com/wp-content/uploads/photo-gallery/IMG_3348-pp-b.jpg" alt="" />
                        <h2>Xing Zheng</h2>
                        <p className='text-xs text-white'>Los Angeles</p>
                        <div className='flex gap-2 text-yellow-600 text-xl'>
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                        </div>
                        <span className='bg-black py-1 px-2 rounded-md text-white text-[14px]'>Design</span>
                        <button className='bg-pink-300/60 py-2 px-4 text-xs rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;