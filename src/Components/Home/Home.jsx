import useProducts from "../../hooks/useProducts";
import ProductCards from "./ProductCards";


const Home = () => {
    const [products,refetch] = useProducts();
    return (
        <div className="container mx-auto my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                     products.map(product => <ProductCards key={product._id} product={product}></ProductCards> )
                }
            </div>
            
        </div>
    );
};

export default Home;