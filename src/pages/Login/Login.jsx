import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginData from '../../assets/lottie/login.json'

const Login = () => {

    const handleLogin = e => {
        e.preventDetault()
    }
    return (
        <div className="hero my-5 md:my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={LoginData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    {/* <SocialLogin></SocialLogin> */}
                    <div className="divider"><h1 className=" mt-4 text-2xl font-bold">Sign In now!</h1></div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-700 text-white">Sign In</button>
                        </div>
                    </form>
                    <div className='flex justify-center pb-3'>
                        <h2>Don't Have Account? <Link to="/signup"><span className='text-green-500'>Register Here</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;