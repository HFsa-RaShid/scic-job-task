import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useaxiosSecure";



const useProducts = () => {
    const axiosSecure = useAxiosSecure();
    
   const {refetch, data: products = []} = useQuery({
    queryKey: ['products'],
    queryFn: async () =>{
        const res = await axiosSecure.get('/products') 
        return res.data;
    }
   })
   return [products,refetch]
};

export default useProducts;