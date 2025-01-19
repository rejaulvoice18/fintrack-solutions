import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import LoginData from '../../assets/lottie/login.json'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const { signInUser } = useAuth();
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // user sign in
        signInUser(email, password)
            .then(result => {
                const currUser = result.user;
                console.log(currUser);
                toast.success('Successfully Signed In')
                // navigate(location?.state ? location.state :'/')
                navigate('/')

            })
            .catch(err => {
                toast.error('Wrong ')
            })
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
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#123456]">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#123456]">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered " required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-[#123456]">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-500 hover:bg-pink-700 text-white rounded-none">Login</button>
                        </div>
                    </form>
                    <div className='flex justify-center pb-3'>
                        <h2>Don't Have Account? <Link to="/signup"><span className='text-green-500'>Register Here</span></Link></h2>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;