import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://scic-jobtask-server-three.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;



