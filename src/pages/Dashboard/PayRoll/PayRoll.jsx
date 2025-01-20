import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { format } from 'date-fns'

const PayRoll = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payhist = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['payhistory'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payhistory');
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-xl text-white pb-5'>Payroll</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Month, Year</th>
                            <th>Pay</th>
                            <th>Payment date</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {/* row 1 */}
                        {
                            payhist.map((payH, index) => <tr key={payH._id}>
                                <th>{index + 1}</th>
                                <td>{payH.name}</td>
                                <td>{payH.email}</td>
                                <td>{payH.salary}</td>
                                <td>{format(new Date(payH.date), 'P')}</td>
                                <td>Pay</td>
                                <td></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayRoll;