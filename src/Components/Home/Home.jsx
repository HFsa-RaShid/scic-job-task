
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCards from "./ProductCards";

const Home = () => {
    const [page, setPage] = useState(1);
    const [products, refetch, nextPage] = useProducts(page, 9);

    const handleNextPage = () => {
        if (nextPage) setPage(nextPage.page);
    };

    const handlePreviousPage = () => setPage(prev => Math.max(prev - 1, 1));

    return (
        <div className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    products.map(product => <ProductCards key={product._id} product={product} />)
                }
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={!nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
