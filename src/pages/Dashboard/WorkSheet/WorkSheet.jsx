import React from 'react';
import { useForm } from 'react-hook-form';

const WorkSheet = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

    }

    return (
        <div>
            <h2 className='text-xl text-white pb-5'>Work Sheet</h2>
            <div>
                <div>
                    <form onSubmit={handleSubmit((onSubmit))} className="card-body flex-col md:flex-row">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Tasks</span>
                            </label>
                            <select defaultValue="default" {...register('task', { required: true })}
                                className="select select-bordered w-full">
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
                        <div className="form-control mt-9">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default WorkSheet;