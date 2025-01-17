import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>

        {/* {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        } */}
        {/* {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        } */}
    </>
    return (
        <div className='bg-pink-700'>
            <>
                <div className="navbar bg-pink-700 text-white max-w-screen-xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm text-white dropdown-content bg-pink-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Bistro Boss</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link>
                            <a className="bg-[#34312d] text-[14px] py-1.5 px-3 rounded-md">Register</a>
                        </Link>
                        <Link to='/login'>
                            <a className="bg-[#34312d] text-[14px]  py-1.5 px-3 rounded-md ml-3">Login</a>
                        </Link>

                    </div>
                </div>

            </>
        </div>
    );
};

export default NavBar;