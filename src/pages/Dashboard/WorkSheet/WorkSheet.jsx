import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaX } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { format } from 'date-fns'

const WorkSheet = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date())
    const axiosSecure = useAxiosSecure()
    
    const { data: workSheets = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['worksheet'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/worksheet/${user.email}`);
            return res.data;
        }
    })

    

    const onSubmit = async (data) => {
        // create work info in the database
        const workInfo = {
            email: user.email,
            name: user.displayName,
            tasks: data.task,
            hours: data.hour,
            date: startDate
        }
        // saving data to the server
        const workData = await axiosSecure.post('/work-sheet', workInfo);
        
        if (workData.data.insertedId) {
            refetch()
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Work Sheet Added successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    const handleDelete = work => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/worksheetdelete/${work._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className='text-xl text-white pb-5'>Work Sheet</h2>
            <div>
                <div className=''>
                    <form onSubmit={handleSubmit((onSubmit))} className="card-body grid grid-cols-2 lg:grid-cols-4 gag-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Tasks</span>
                            </label>
                            <select defaultValue="default" {...register('task', { required: true })}
                                className="select select-bordered w-40">
                                <option disabled value='default'>Select a Task</option>
                                <option value="sales">Sales</option>
                                <option value="support">Support</option>
                                <option value="content">Content</option>
                                <option value="paper-work">Paper-work</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Hours</span>
                            </label>
                            <input type="number" {...register("hour", { required: true })} name="hour" placeholder="hour" className="input input-bordered" />
                            {errors.hour && <p className='text-red-600'>Hour is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Date</span>
                            </label>
                            <DatePicker
                                className='border p-2.5 rounded-md text-[17px] w-40'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className="form-control mt-9">
                            <button className="btn btn-primary w-20">Add</button>
                        </div>
                    </form>
                </div>
                <div className='py-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='text-white'>
                                <tr>
                                    <th>#</th>
                                    <th>Tasks</th>
                                    <th>Hours</th>
                                    <th>Date</th>
                                    <th>Delete</th>
                                    <th>Edit</th>

                                </tr>
                            </thead>
                            <tbody className='text-white'>
                                {/* row 1 */}
                                {
                                    workSheets.map((work, index)=> <tr key={work._id}>
                                    <th>{index + 1}</th>
                                    <td>{work.tasks}</td>
                                    <td>{work.hours}</td>
                                    <td>{format(new Date(work.date), 'P')}</td>
                                    <td><button onClick={()=> handleDelete(work)}><FaX className='text-red-700 font-bold'></FaX></button></td>
                                    <td><button><FaEdit className='text-orange-500'></FaEdit></button></td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSheet;