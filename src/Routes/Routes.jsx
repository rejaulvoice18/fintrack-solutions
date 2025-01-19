import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import HrHome from "../pages/Dashboard/HrHome/HrHome";
import EmployeeHome from "../pages/Dashboard/EmployeeHome/EmployeeHome";
import AllEmployee from "../pages/Dashboard/AllEmployee/AllEmployee";
import WorkSheet from "../pages/Dashboard/WorkSheet/WorkSheet";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EmployeeList from "../pages/Dashboard/EmployeeList/EmployeeList";
import Progress from "../pages/Dashboard/Progress/Progress";
import PayRoll from "../pages/Dashboard/PayRoll/PayRoll";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            //admin routes
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'all-employee-list',
                element: <AllEmployee></AllEmployee>
            },
            {
                path: 'payroll',
                element: <PayRoll></PayRoll>
            },
            // hr routes
            {
                path: 'hrHome',
                element: <HrHome></HrHome>
            },
            {
                path: 'employee-list',
                element: <EmployeeList></EmployeeList>
            },
            {
                path: 'progress',
                element: <Progress></Progress>
            },
            // employee home
            {
                path: 'employeeHome',
                element: <EmployeeHome></EmployeeHome>
            },
            {
                path: 'work-sheet',
                element: <WorkSheet></WorkSheet>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
])