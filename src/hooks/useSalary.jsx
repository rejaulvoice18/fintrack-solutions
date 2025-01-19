import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSalary = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();

    const {refetch, data: salary = [] } = useQuery({
        // queryKey aita cach kore jeno bar bar api call na korte hoy
        // user?.email onujaye queryKey cach kore dynamically shudhu individual user er data load koreb
        queryKey: ['salary', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/userlist?email=${user.email}`)
            return res.data;
        }
    })
    return [salary, refetch]
};

export default useSalary;