import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const ContactUs = () => {
    return (
        <div className='px-5'>
            <Helmet>
                <title>FinTrack Solutions | Contact Us</title>
            </Helmet>
            <div className='max-w-screen-xl mx-auto'>
                <h2 className='text-xl text-white py-10'>Contact Us</h2>
                <div className='my-5 md:my-10'>
                    <div>
                        <h2 className='text-white text-2xl'>You are welcome to work together</h2>
                       
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-6 mt-10 gap-8 md:gap-12'>
                        <div className='col-span-4'>
                            <div className=''>
                                <form>
                                    {/*name and email row */}
                                    <div className='md:flex gap-3 mb-5'>
                                        <div className='form-control md:w-1/2'>
                                            <label className='input-group'>
                                                <input name="name" className='input bg-gray-800 border-orange-500/20 w-full' type="text" placeholder='Your name' id="" />
                                            </label>
                                        </div>
                                        <div className='form-control md:w-1/2'>
                                            <label className='input-group'>
                                                <input name="email" className='input bg-gray-800 border-orange-500/20 w-full' type="text" placeholder='Email address' id="" />
                                            </label>
                                        </div>
                                    </div>

                                    {/* phone and address row */}
                                    <div className='md:flex gap-3 mb-5'>
                                        <div className='form-control md:w-1/2'>
                                            <label className='input-group'>
                                                <input name="phone" className='input bg-gray-800 border-orange-500/20 w-full' type="text" placeholder='Phone number' id="" />
                                            </label>
                                        </div>
                                        <div className='form-control md:w-1/2'>
                                            <label className='input-group'>
                                                <input name="address" className='input w-full bg-gray-800 border-orange-500/20' type="text" placeholder='Address' id="" />
                                            </label>
                                        </div>
                                    </div>
                                    {/* phone and address row */}
                                    <div className='md:flex gap-3 mb-5'>
                                        <div className='form-control md:w-full'>
                                            <label className='input-group'>
                                                <textarea
                                                    placeholder="Text Here"
                                                    className="textarea bg-gray-800 border-orange-500/20  w-full"></textarea>
                                            </label>
                                        </div>
                                    </div>
                                    <input type="submit" value="Send Message" className='btn btn-block bg-orange-500/20 text-white font-bold border-none hover:bg-orange-500/40' />
                                </form>
                            </div>
                        </div>
                        <div className='col-span-2 flex flex-col gap-10'>
                            <div className='flex gap-3 text-white'>
                                <div className='flex flex-col p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className='text-xs'>Phone</p>
                                    <p className='text-xs'>(+351) 920083705</p>
                                </div>
                            </div>
                            <div className='flex gap-3 text-white'>
                                <div className='flex flex-col p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <MdOutlineEmail />
                                </div>
                                <div>
                                    <p className='text-xs'>Email</p>
                                    <p className='text-xs'>rejaulkarimpt90@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;