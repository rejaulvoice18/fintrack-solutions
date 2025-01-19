import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import useAdmin from '../../hooks/useAdmin';

const NavBar = () => {
    const { user, logOutUSer } = useAuth();
    const [isAdmin] = useAdmin()

    const navOptions = <>
        {
            user && isAdmin && <li><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink to="/dashboard/employeeHome">Dashboard</NavLink></li>
        }
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

    const handleSignOut = () => {
        logOutUSer()
            .then(() => { })
            .then(err => console.log(err.message))
    }
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
                                className="menu menu-sm text-white dropdown-content bg-pink-700 rounded-box z-[10] mt-3 w-52 p-2 shadow">

                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">FinTrack Solutions</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* star */}
                        {
                            user?.email
                                ? <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                            <img src={user?.photoURL && user?.photoURL} id="nameTitle" />
                                            <ReactTooltip
                                                anchorId="nameTitle"
                                                place='top'
                                                content={user?.email && user.displayName}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[10] mt-3 w-32 p-2 shadow">

                                        <li><Link onClick={handleSignOut}>Log Out</Link></li>
                                    </ul>
                                </div>
                                : <>
                                    <Link to='/signUp'>
                                        <a className="bg-black text-[14px] hover:bg-gray-700 py-2 px-4 rounded">Register</a>
                                    </Link>
                                    <Link to='/login'>
                                        <a className="bg-black text-[14px] hover:bg-gray-700 py-2 px-6 rounded ml-3">Login</a>
                                    </Link>
                                </>
                        }
                        {/* end */}


                    </div>
                </div>

            </>
        </div>
    );
};

export default NavBar;