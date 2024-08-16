
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useaxiosSecure";


const useProducts = (page, limit, sortField, sortOrder, search, selectedBrand, selectedCategory, minPrice, maxPrice) => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data } = useQuery({
        queryKey: ['products', page, sortField, sortOrder, search, selectedBrand, selectedCategory, minPrice, maxPrice],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products`, {
                params: {
                    page,
                    limit,
                    sortField,
                    sortOrder,
                    search,
                    brand: selectedBrand,
                    category: selectedCategory,
                    minPrice,   
                    maxPrice    
                }
            });
            return res.data;
        }
    });
    
    return [data?.results || [], refetch, data?.next || null];
};

export default useProducts;
