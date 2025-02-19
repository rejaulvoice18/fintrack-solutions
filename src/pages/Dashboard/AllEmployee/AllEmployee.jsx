import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCheckSquare, FaEdit, FaFire } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { Helmet } from "react-helmet-async";


const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const [disabled, setDisabled] = useState(true);

    const { data: users = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // making hr mechanism
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/hr/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an HR Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakeFire = user => {
        axiosSecure.patch(`/users/fire/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an HR Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Fintrack Solutions | Employees</title>
            </Helmet>
            <div className="flex gap-20">
                <h2 className='text-xl text-white py-5'>All Employee List</h2>
                <div className="flex gap-5">
                    <button onClick={() => setDisabled(true)} className="bg-pink-500 btn text-white hover:bg-pink-700 border-none">list</button>
                    <button onClick={() => setDisabled(false)} className="bg-pink-500 btn text-white hover:bg-pink-700 border-none">Grid</button>
                </div>
            </div>
            <div className={`${disabled === false ? 'hidden' : 'block'} "overflow-x-auto"`}>
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Bank Account NO</th>
                            <th>Salary</th>
                            <th>Adjust Salary</th>
                            <th>Fire</th>
                            <th>Make HR</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.designation}</td>
                                <td>{user.bank_account_no}</td>
                                <td>$ {user.salary}</td>
                                <td><button><FaEdit className="bg-orange-500 p-1" size={20}></FaEdit></button></td>
                                <td>
                                    {
                                        user.isFired === 'true' ? 'Fired'
                                            : <button onClick={() => handleMakeFire(user)}><FaFire className="text-orange-500" size={20}></FaFire></button>
                                    }
                                </td>
                                <td>
                                    {user.role === 'employee' ? <button
                                        onClick={() => handleMakeAdmin(user)}><span>[]</span></button>
                                        : <FaCheckSquare className="text-green-500"></FaCheckSquare>}
                                </td>
                                <td><FcViewDetails></FcViewDetails></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div className={` ${disabled === true ? 'hidden' : 'block'} "max-w-screen-xl mx-auto py-20 px-5 text-white"`}>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {users.map(user => <div key={user._id} className='bg-gray-800 rounded-lg py-5 px-4 text-2xl font-bold w-72'>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Name :</p>
                            <p className="text-gray-300 text-[14px] font-bold">{user.name}</p>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Email :</p>
                            <p className="text-gray-300 text-[14px] font-bold">{user.email}</p>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Designation :</p>
                            <p className="text-gray-300 text-[14px] font-bold">{user.designation}</p>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Bank Account NO:  </p>
                            <p className="text-gray-300 text-[14px] font-bold">{user.bank_account_no}</p>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Salary :</p>
                            <p className="text-gray-300 text-[14px] font-bold">{user.salary}</p>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Adjust Salary</p>
                            <button><FaEdit className="bg-orange-500 p-1" size={20}></FaEdit></button>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Fire</p>
                            {
                                user.isFired === 'true' ? 'Fired'
                                    : <button onClick={() => handleMakeFire(user)}><FaFire className="text-orange-500" size={20}></FaFire></button>
                            }
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Make HR</p>
                            {user.role === 'employee' ? <button
                                onClick={() => handleMakeAdmin(user)}><span>[]</span></button>
                                : <FaCheckSquare className="text-green-500"></FaCheckSquare>}
                        </div>
                        <div className="flex gap-3 justify-between">
                            <p className="text-gray-300 text-[14px]">Details</p>
                            <button><FcViewDetails></FcViewDetails></button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default AllEmployee;