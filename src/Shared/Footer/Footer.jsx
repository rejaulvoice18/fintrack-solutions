import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="bg-yellow-100/10">
                <div className="max-w-screen-xl mx-auto pt-20 pb-10 px-5">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div className=''>
                            <Link>
                                <img src={logo} alt="" />
                                <h2 className='text-white text-2xl'>FinTrack <br/> Solutions</h2>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-2xl text-pink-700'>MENU</h2>
                            <p className='text-white'>Home</p>
                            <p className='text-white'>About Us</p>
                            <p className='text-white'>Contact Us</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-2xl text-pink-700'>SERVICE</h2>
                            <p className='text-white'>WorkFlow Monitoring</p>
                            <p className='text-white'>Data Recording</p>
                            <p className='text-white'>Payment Management</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-2xl text-pink-700'>SOCIAL</h2>
                            <div className='flex gap-5'>
                                <span className='p-2 rounded-full bg-pink-700 text-white'><FaFacebook></FaFacebook></span>
                                <span className='p-2 rounded-full bg-pink-700 text-white'><FaInstagram></FaInstagram></span>
                                <span className='p-2 rounded-full bg-pink-700 text-white'><FaTwitter></FaTwitter></span>
                            </div>
                        </div>
                    </div>
                    <div className='border-b py-5'>

                    </div>
                    <div className='flex justify-between mt-8 gap-5'>
                        <div className='text-white'><a>2025 . All rights resered</a></div>
                        <div className='flex gap-5 text-white'>
                            <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;