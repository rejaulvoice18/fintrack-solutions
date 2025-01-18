import Lottie from 'lottie-react';
import registerLottieData from '../../assets/lottie/register.json'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
// image hosting url making
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const [error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
       // image upload to imgbb and then get an url
       const imageFile = { image: data.image[0] }
       const res = await axiosPublic.post(image_hosting_api, imageFile, {
           headers: {
               'content-type': 'multipart/form-data'
           }
       })
        // console.log(res.data.data.display_url)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                // updating user profile
                updateUserProfile(data.name, res.data.data.display_url)
                    .then(async () => {
                        if (res.data.success) {
                            // create user info in the database
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                                bank_account_no: data.bank_account_no,
                                salary: data.salary,
                                role: data.user_role,
                                designation: data.designation,
                                image: res.data.data.display_url

                            }
                            // saving data to the server
                            const userData = await axiosPublic.post('/users', userInfo);
                            console.log('with image url', userData.data)
                            if (userData.data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: 'Account create successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')
                            }
                        }
                    })

            })
            .then(err => console.log(err))
    }

    return (
        <div className="hero bg-base-200 py-10">
            <Helmet>
                <title>FinTrack Solutions | SignUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit((onSubmit))} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <p className='text-red-600'>Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bank Account Number</span>
                            </label>
                            <input type="number" {...register("bank_account_no", { required: true, minLength: 10 })} name="bank_account_no" placeholder="Bank Account Number" className="input input-bordered" />
                            {errors.bank_account_no && <p className='text-red-600'>Bank Account is required</p>}
                            {errors.bank_account_no?.type === 'minLength' && <p className='text-red-600'>Account must be more than 10 digits</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary</span>
                            </label>
                            <input type="number" {...register("salary", { required: true })} name="salary" placeholder="Salary" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>Salary is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Designation</span>
                            </label>
                            <input type="text" {...register("designation", { required: true })} name="designation" placeholder="Designation" className="input input-bordered" />
                            {errors.designation && <p className='text-red-600'>Designation is required</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">[Sales Assistant, Social Media, Digital Marketer]</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Role</span>
                            </label>
                            <select defaultValue="default" {...register('user_role', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a role</option>
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>
                            </select>
                        </div>
                        <div className='form-control w-full'>
                            <input {...register('image', { required: true })} type="file"
                                className="file-input w-full max-w-xs " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 8 charactrs</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 charactrs</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have minimum eight characters, at least one letter and one number</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className='text-red-500'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <p className='pb-4 text-center'><small>Already have an account <Link to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;