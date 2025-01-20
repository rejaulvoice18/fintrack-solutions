import useAuth from '../hooks/useAuth';
import useHr from '../hooks/useHr';
import { useLocation } from 'react-router-dom';

const HrRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isHr, isHrLoading] = useHr();
    const location = useLocation();

    if(loading || isHrLoading){
        return <progress className='progress w-56'></progress>
    }
    
    if(user && isHr){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default HrRoute;