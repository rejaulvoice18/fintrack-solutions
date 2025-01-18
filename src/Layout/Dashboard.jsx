import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaStar, FaUsers, FaUtensils, } from "react-icons/fa";

const Dashboard = () => {
    //TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-pink-700 text-white">
                <ul className="menu p-4">
                    {/* Admin Home */}
                    <li>
                        <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils>Add Items </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'> <FaList></FaList> Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'> <FaBook></FaBook> Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'> <FaUsers></FaUsers> All Users</NavLink>
                    </li>
                    {/* HR Home */}
                    <li>
                        <NavLink to='/dashboard/hrHome'> <FaHome></FaHome>HR Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation </NavLink>
                    </li>
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