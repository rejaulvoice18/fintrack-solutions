import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const PaymentHr = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: userlist = [], refetch } = useQuery({
        // queryKey er madhome data cache kora hochhe aikhane
        queryKey: ['userlist-single'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userlist-single/${id}`);
            return res.data;
        }
    })

    const { name, email, bank_account_no, salary, role, designation, image } = userlist


    const onSubmit = async (data) => {

        const paymentInfo = {
            name: name,
            email: email,
            salary: data.salary,
            designation: designation,
            image: image,
            transaction_id: 'TEST_ID_TEST_ID',
            pay_status: 'false',
            date: startDate

        }
        // saving data to the server
        const payData = await axiosSecure.post('/payment-hr', paymentInfo);

        if (payData.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Payment Requested',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/employee-list')
        }
    }

    return (
        <div>
            <h2 className='text-xl text-white'>Employees Payment</h2>

            <div className=''>
                <form onSubmit={handleSubmit((onSubmit))} className="card-body md:flex-row gag-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Salary</span>
                        </label>
                        <input defaultValue={salary} type="number" {...register("salary", { required: true })} name="salary" placeholder="salary" className="input input-bordered" />
                        {errors.salary && <p className='text-red-600'>Hour is required</p>}
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
                        <button className="btn bg-pink-500 hover:bg-pink-700 border-none text-white w-20">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentHr;