
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useaxiosSecure";


const useProducts = (page, limit) => {
    const axiosSecure = useAxiosSecure();
    
   const { refetch, data } = useQuery({
    queryKey: ['products', page],
    queryFn: async () => {
        const res = await axiosSecure.get(`/products?page=${page}&limit=${limit}`);
        return res.data;
    }
   });

   return [data?.results || [], refetch, data?.next || null];
};

export default useProducts;
