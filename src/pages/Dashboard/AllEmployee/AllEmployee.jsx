import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCheckSquare, FaEdit, FaFire } from "react-icons/fa";
import Swal from "sweetalert2";


const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();

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
        // request interceptor to add authorization header for every secure call to the api
        axiosSecure.patch(`/users/hr/${user._id}`)
            .then(res => {
                console.log(res.data)
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
            <h2 className='text-xl text-white py-5'>All Employee List</h2>
            <div className="overflow-x-auto">
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
                                <td><button><FaFire className="text-orange-500" size={20}></FaFire></button></td>
                                <td>
                                    {user.role === 'employee' ? <button
                                        onClick={() => handleMakeAdmin(user)}><span>[]</span></button>
                                        : <FaCheckSquare className="text-green-500"></FaCheckSquare>}
                                </td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEmployee;