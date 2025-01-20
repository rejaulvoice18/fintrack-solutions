import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from 'date-fns'


const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payhist = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['payhistorysingle'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payhistorysingle/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-xl text-white pb-5'>Payment History</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>#</th>
                            <th>Month, Year</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {/* row 1 */}
                        {
                            payhist.map((payH, index) => <tr key={payH._id}>
                                <th>{index + 1}</th>
                                <td>{format(new Date(payH.date), 'P')}</td>
                                <td>{payH.salary}</td>
                                <td>{payH.transaction_id}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;