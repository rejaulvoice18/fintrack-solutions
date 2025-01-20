import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <section className='bg-white '>
                <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12'>
                    <div className='wf-ull lg:w-1/2'>
                        <p className='text-sm font-medium text-gray-500'>404 error</p>
                        <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
                            Page not found
                        </h1>
                        <p className='mt-4 text-gray-500 dark:text-gray-400'>
                            Sorry for the inconvenience, the page you are looking for doesnt exist.Here are some
                            helpful links:
                        </p>


                    </div>

                    <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
                        <img
                            className=' w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover '
                            src='https://t4.ftcdn.net/jpg/07/29/45/59/360_F_729455984_0BLpankzqOhGPVorxT5Tu7VuLNPvx2ur.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;