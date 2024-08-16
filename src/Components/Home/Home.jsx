
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCards from "./ProductCards";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';  
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [page, setPage] = useState(1);
    const [sortField, setSortField] = useState('creationDate');
    const [sortOrder, setSortOrder] = useState('desc');
    const [search, setSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');  
    const [selectedCategory, setSelectedCategory] = useState('');  
    const [priceRange, setPriceRange] = useState([0, 500]);  

    const [products, refetch, nextPage, loading] = useProducts(page, 9, sortField, sortOrder, search, selectedBrand, selectedCategory, priceRange[0], priceRange[1]);

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
        setSearch(searchTerm);
        setPage(1);
        refetch();
    };

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        refetch();
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        refetch();
    };

    const handlePriceRangeChange = (value) => {
        setPriceRange([value, priceRange[1]]); 
        refetch();
    };

    const handleMaxPriceRangeChange = (value) => {
        setPriceRange([priceRange[0], value]); 
        refetch();
    };

    return (
        <div className="container mx-auto my-20 px-4">
            <Helmet>
                <title>Home | QuickCart</title>
            </Helmet>

            <div className="md:flex justify-between lg:justify-evenly w-full lg:w-[80%] mx-auto mb-10">

                {/* Category */}
                <select onChange={handleCategoryChange} className="border border-[#9b3869] p-2 mr-20 md:mr-0">
                    <option value="">All Categories</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Accessories">Accessories</option>
                </select>

                {/* Brand */}
                <select onChange={handleBrandChange} className="border border-[#9b3869] p-2">
                    <option value="">All Brands</option>
                    <option value="SpeedFit">SpeedFit</option>
                    <option value="Stride">Stride</option>
                    <option value="UrbanWear">UrbanWear</option>
                    <option value="ClassicThreads">ClassicThreads</option>
                    <option value="StyleFusion">StyleFusion</option>
                    <option value="GoldenGleam">GoldenGleam</option>
                    <option value="ShineBright">ShineBright</option>
                    <option value="Elegance">Elegance</option>
                    <option value="LuxJewels">LuxJewels</option>
                    <option value="PrimeLeather">PrimeLeather</option>
                    <option value="FashionStep">FashionStep</option>
                    <option value="DurableWear">DurableWear</option>
                    <option value="ChicBag">ChicBag</option>
                </select>

                {/* Price Range */}
                <div className="flex items-center space-x-2">
                    <span>Price:</span>
                    <Slider
                        min={0}
                        max={500}
                        step={1}
                        value={priceRange[0]}
                        onChange={handlePriceRangeChange} 
                        className="w-40"
                    />
                    <span>-</span>
                    <Slider
                        min={0}
                        max={500}
                        step={1}
                        value={priceRange[1]}
                        onChange={handleMaxPriceRangeChange} 
                        className="w-32 lg:w-40"
                    />
                    <div className='ml-2'>{`$${priceRange[0]} - $${priceRange[1]}`}</div>
                </div>
            </div>

            <div className="md:flex justify-evenly mb-20 space-x-4 mx-auto w-full md:w-[80%] lg:w-[90%] ml-6">
                <div className="">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchTerm} 
                        onChange={handleSearchChange}
                        className="border border-[#9b3869] p-2 w-[250px] mb-6 md:mb-0"
                    />
                    <button 
                        onClick={handleSearchClick} 
                        className="border bg-[#9b3869] text-white p-2 rounded"
                    >
                        Search
                    </button>
                </div>

                <select onChange={(e) => handleSortChange(e.target.value)} className="border border-[#9b3869] p-2">
                    <option value="date_desc">Date Added: Newest First</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                </select>
            </div>

            {loading ? (
                <div className="flex justify-center items-center my-20">
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {products.map(product => <ProductCards key={product._id} product={product} />)}
                </div>
            )}

            <div className="flex justify-between mt-10 items-center">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={page === 1} 
                    className="bg-[#9b3869] text-white p-3 rounded-xl flex items-center"
                >
                    <MdArrowBackIos />
                    Previous
                </button>

                <span className="text-lg font-semibold">
                    Page {page}
                </span>

                <button 
                    onClick={handleNextPage} 
                    disabled={!nextPage} 
                    className="bg-[#9b3869] text-white p-3 rounded-xl flex items-center"
                >
                    Next
                    <GrNext />
                </button>
            </div>
        </div>
    );
};

export default Home;
