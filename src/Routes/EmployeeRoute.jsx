import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useEmployee from "../hooks/useEmployee";


const EmployeeRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isEmployee, isEmployeeLoading] = useEmployee();
    const location = useLocation();

    if(loading || isEmployeeLoading){
        return <progress className='progress w-56'></progress>
    }
    
    if(user && isEmployee){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default EmployeeRoute;