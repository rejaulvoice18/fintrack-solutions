import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCheckSquare, FaEdit, FaFire } from "react-icons/fa";


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

    return (
        <div>
            <h2 className='text-xl text-white'>All Employees</h2>
            <div>
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
                            users.map((user, index) =>   <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.designation}</td>
                            <td>{user.bank_account_no}</td>
                            <td>$ {user.salary}</td>
                            <td><button><FaEdit className="bg-orange-500 p-1" size={20}></FaEdit></button></td>
                            <td><button><FaFire className="text-orange-500" size={20}></FaFire></button></td>
                            <td>{ user.role === 'employee' ? <><button><span>[]</span></button></> : <FaCheckSquare className="text-green-500"></FaCheckSquare> }</td>
                            <td>Blue</td>
                        </tr>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllEmployee;