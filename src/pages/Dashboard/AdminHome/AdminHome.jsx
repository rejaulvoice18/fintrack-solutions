import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    const {user} = useAuth()
    
    return (
        <div>
            <Helmet>
                <title>Admin Dashboard</title>
            </Helmet>
            <h2 className='text-2xl font-bold text-white'>Employee Dashboard</h2>
            <h2 className="text-xl text-white my-3">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

        </div>
    );
};

export default AdminHome;