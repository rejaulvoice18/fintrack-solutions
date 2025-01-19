import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useEmployee = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    //isPending ta tanstack theke neua hoiche
    const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
        queryKey: [user?.email, 'isEmployee'],
        // loading hoye gele loading bondho kora hochhe
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is emplyee', user)
            const res = await axiosSecure.get(`/users/employee/${user.email}`);
            console.log(res.data)
            return res.data?.employee;
        }
    })
    return [isEmployee, isEmployeeLoading]
};

export default useEmployee;