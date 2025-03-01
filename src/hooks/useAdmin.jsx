import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    //isPending ta tanstack theke neua hoiche
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        // loading hoye gele loading bondho kora hochhe
        enabled: !loading,
        queryFn: async () => {
            
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;