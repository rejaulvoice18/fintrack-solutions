import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaStar, FaUsers, FaUtensils, } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    //TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();
    const [isAdmin] = useAdmin()

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-pink-700 text-white">
                <ul className="menu p-4">
                    {/* Admin Home */}
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home </NavLink>
                            </li>
                            <li>
                            <NavLink to='/dashboard/paymentHistory'> <FaList></FaList>Payment</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> <FaUsers></FaUsers> All Employees</NavLink>
                            </li>

                        </>
                            : <>
                                {/* HR Home */}
                                <li>
                                    <NavLink to='/dashboard/hrHome'> <FaHome></FaHome>HR Home </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation </NavLink>
                                </li>
                            </>
                    }
                    {/* Employee home */}

                    <li>
                        <NavLink to='/dashboard/employeeHome'> <FaHome></FaHome>Employee Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'> <FaStar></FaStar>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory'> <FaList></FaList> Payment History</NavLink>
                    </li>

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> <FaHome></FaHome> Home </NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;