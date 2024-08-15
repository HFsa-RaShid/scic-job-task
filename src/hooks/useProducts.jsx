
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useaxiosSecure";

const useProducts = (page, limit, sortField, sortOrder, search) => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data } = useQuery({
        queryKey: ['products', page, sortField, sortOrder, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}&search=${search}`);
            return res.data;
        }
    });
    
    return [data?.results || [], refetch, data?.next || null];
};

export default useProducts;

