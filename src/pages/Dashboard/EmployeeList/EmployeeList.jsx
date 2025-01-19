import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { TbMoneybag } from "react-icons/tb";
import { FcViewDetails } from "react-icons/fc";
import { FaCheckSquare } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useState } from "react";


const EmployeeList = () => {
    const axiosSecure = useAxiosSecure();

    const { data: userlist = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['userlist'],
        queryFn: async () => {
            const res = await axiosSecure.get('/userlist');
            return res.data;
        }
    })

    const handleMakeVerified = user => {
        axiosSecure.patch(`/users/verified/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is verified Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

          
    }
    return (
        <div>
            <h2 className='text-xl pb-5 text-white'>Employee List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {/* row 1 */}

                        {
                            userlist.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.isVerified === 'true' ? <FaCheckSquare className="text-green-500"></FaCheckSquare>
                                        : <button onClick={() => handleMakeVerified(user)}><FaX className="text-red-600 font-bold"></FaX></button>}
                                </td>
                                <td>{user.bank_account_no}</td>
                                <td>{user.salary}</td>
                                <td><button disabled={!user.isVerified} className={`${user.isVerified === 'true' ? 'text-yellow-600' : 'text-gray-400 cursor-not-allowed'}`}><TbMoneybag  size={20}></TbMoneybag></button></td>
                                <td><button><FcViewDetails></FcViewDetails></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;