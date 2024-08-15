
// import { useState } from "react";
// import useProducts from "../../hooks/useProducts";
// import ProductCards from "./ProductCards";

// const Home = () => {
//     const [page, setPage] = useState(1);
//     const [sortField, setSortField] = useState('creationDate');
//     const [sortOrder, setSortOrder] = useState('desc'); 
//     const [products, refetch, nextPage] = useProducts(page, 9, sortField, sortOrder);

//     const handleNextPage = () => {
//         if (nextPage) setPage(nextPage.page);
//     };

//     const handlePreviousPage = () => setPage(prev => Math.max(prev - 1, 1));

//     const handleSortChange = (sortOption) => {
//         let field, order;
        
//         switch (sortOption) {
//             case "date_desc":
//                 field = "creationDate";
//                 order = "desc";
//                 break;
//             case "price_asc":
//                 field = "price";
//                 order = "asc";
//                 break;
//             case "price_desc":
//                 field = "price";
//                 order = "desc";
//                 break;
//             default:
//                 field = "creationDate";
//                 order = "desc";
//         }

//         setSortField(field);
//         setSortOrder(order);
//         refetch();
//     };

//     return (
//         <div className="container mx-auto my-20 px-4">
//             <div className="flex justify-end mb-4">
//                 <select onChange={(e) => handleSortChange(e.target.value)}>
//                     <option value="date_desc">Date Added: Newest First</option>
//                     <option value="price_asc">Price: Low to High</option>
//                     <option value="price_desc">Price: High to Low</option>
//                 </select>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
//                 {products.map(product => <ProductCards key={product._id} product={product} />)}
//             </div>
//             <div className="flex justify-between mt-4">
//                 <button onClick={handlePreviousPage} disabled={page === 1}>
//                     Previous
//                 </button>
//                 <button onClick={handleNextPage} disabled={!nextPage}>
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Home;


import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCards from "./ProductCards";

const Home = () => {
    const [page, setPage] = useState(1);
    const [sortField, setSortField] = useState('creationDate');
    const [sortOrder, setSortOrder] = useState('desc'); 
    const [search, setSearch] = useState('');  // Search query state
    const [searchTerm, setSearchTerm] = useState('');  // State for input field value
    const [products, refetch, nextPage] = useProducts(page, 9, sortField, sortOrder, search);

    const handleNextPage = () => {
        if (nextPage) setPage(nextPage.page);
    };

    const handlePreviousPage = () => setPage(prev => Math.max(prev - 1, 1));

    const handleSortChange = (sortOption) => {
        let field, order;
        
        switch (sortOption) {
            case "date_desc":
                field = "creationDate";
                order = "desc";
                break;
            case "price_asc":
                field = "price";
                order = "asc";
                break;
            case "price_desc":
                field = "price";
                order = "desc";
                break;
            default:
                field = "creationDate";
                order = "desc";
        }

        setSortField(field);
        setSortOrder(order);
        refetch();
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        console.log("Search Term:", searchTerm);
        setSearch(searchTerm);
        setPage(1); 
        refetch();
    };

    return (
        <div className="container mx-auto my-20 px-4">
            <div className="flex justify-end mb-4">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm} 
                    onChange={handleSearchChange}
                    className="border border-[#9b3869] p-2 mr-1"
                />
                <button 
                    onClick={handleSearchClick} 
                    className="border bg-[#9b3869] text-white p-2 rounded"
                >
                    Search
                </button>
                <select onChange={(e) => handleSortChange(e.target.value)} className="ml-4 border border-[#9b3869]">
                    <option value="date_desc">Date Added: Newest First</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {products.map(product => <ProductCards key={product._id} product={product} />)}
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
