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
import ContactUs from "../pages/ContactUs/ContactUs";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";
import EmployeeRoute from "./EmployeeRoute";
import PaymentHr from "../pages/Dashboard/PaymentHr/PaymentHr";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <Register></Register>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            }
        ]

    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            //admin routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'all-employee-list',
                element: <AdminRoute><AllEmployee></AllEmployee></AdminRoute>
            },
            {
                path: 'payroll',
                element: <AdminRoute><PayRoll></PayRoll></AdminRoute>
            },
            // hr routes
            {
                path: 'hrHome',
                element: <HrRoute><HrHome></HrHome></HrRoute>
            },
            {
                path: 'employee-list',
                element: <HrRoute><EmployeeList></EmployeeList></HrRoute>
            },
            {
                path: 'progress',
                element: <HrRoute><Progress></Progress></HrRoute>
            },
            {
                path: 'paymentpost/:id',
                element: <HrRoute><PaymentHr></PaymentHr></HrRoute>,
            },
            // employee home
            {
                path: 'employeeHome',
                element: <EmployeeRoute><EmployeeHome></EmployeeHome></EmployeeRoute>
            },
            {
                path: 'work-sheet',
                element: <EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute>
            },
            {
                path: 'payment-history',
                element: <EmployeeRoute><PaymentHistory></PaymentHistory></EmployeeRoute>
            }
        ]
    }
])