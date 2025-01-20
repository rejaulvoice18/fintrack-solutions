import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from 'date-fns'

const Progress = () => {
    const axiosSecure = useAxiosSecure();

    const { data: progress = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['progress'],
        queryFn: async () => {
            const res = await axiosSecure.get('/progress');
            return res.data;
        }
    })

    const singleName = [...new Set(progress.map(name => name.name))];


    return (
        <div>
            <h2 className='text-xl pb-5 text-white'>Progress</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10 '>
                <div>
                    <select
                        name='category'
                        id='category'
                        // onChange={(e) => setSort(e.target.value)}
                        // value={sort}
                        className='border p-1 rounded-md'
                    >
                        <option value=''>Filter By Name</option>
                        {
                            singleName.map((name, idx) => <option key={idx} value={name}>{name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <select
                        name='category'
                        id='category'
                        // onChange={(e) => setSort(e.target.value)}
                        // value={sort}
                        className='border p-1 rounded-md'
                    >
                        <option value=''>Filter By Month</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>

                    </select>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tasks</th>
                            <th>Hours</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {/* row 1 */}
                        {
                            progress.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.tasks}</td>
                                <td>{user.hours}</td>
                                <td>{format(new Date(user.date), 'P')}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Progress;