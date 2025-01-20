import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaList, FaUsers, } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
import useEmployee from '../hooks/useEmployee';
import useHr from '../hooks/useHr';
import { FaBarsProgress } from 'react-icons/fa6';

const Dashboard = () => {
    //TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();
    const [isAdmin] = useAdmin()
    const [isEmployee] = useEmployee()
    const [isHr] = useHr()

    return (
        <div className="md:flex">
            {/* dashboard side bar */}
            <div className="md:w-64 md:min-h-screen bg-pink-700 text-white">
                <ul className="menu p-4">

                    {/* Admin Home */}
                    {
                        isAdmin && <>
                            <li>
                                <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/all-employee-list'> <FaUsers></FaUsers> All Employees</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payroll'> <FaList></FaList>Payroll</NavLink>
                            </li>
                        </>
                    }

                    {/* HR Home */}
                    {
                        isHr && <>
                            <li>
                                <NavLink to='/dashboard/hrHome'> <FaHome></FaHome>HR Home </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/employee-list'> <FaList></FaList>Employee List</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/progress'> <FaBarsProgress></FaBarsProgress> Progress </NavLink>
                            </li>
                        </>
                    }

                    {/* Employee home */}
                    {
                        isEmployee && <>
                            <li>
                                <NavLink to='/dashboard/employeeHome'> <FaHome></FaHome>Employee Home </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/work-sheet'> <FaCalendar></FaCalendar> Work Sheet </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment-history'> <FaList></FaList>Payment History</NavLink>
                            </li>
                        </>
                    }


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