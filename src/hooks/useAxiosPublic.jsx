import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://fintrack-solutions-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;