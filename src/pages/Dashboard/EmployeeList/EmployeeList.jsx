import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const EmployeeList = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['userlist'],
        queryFn: async () => {
            const res = await axiosSecure.get('/userlist');
            return res.data;
        }
    })
    
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
                                
                                    <tr >
                                    <th>1</th>
                                    <td>tasks</td>
                                    <td>hours</td>
                                    <td>date</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default EmployeeList;