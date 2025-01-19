import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHr = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    //isPending ta tanstack theke neua hoiche
    const { data: isHr, isPending: isHrLoading } = useQuery({
        queryKey: [user?.email, 'isHr'],
        // loading hoye gele loading bondho kora hochhe
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is hr', user)
            const res = await axiosSecure.get(`/users/hr/${user.email}`);
            console.log(res.data)
            return res.data?.hr;
        }
    })
    return [isHr, isHrLoading]
};

export default useHr;