import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    
    return (
        
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <Helmet>
                <title>Error_Page | EduConnect</title>
            </Helmet>
            <img src="https://i.ibb.co/kMSWc5g/2658093.webp"  />
            <p className="text-lg text-gray-600 mb-6 ">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="px-3 py-2 border border-[#eba9ca] text-[#b30059] rounded-md font-medium">
                Go Back to Home
            </Link>
        </div>

    );
};

export default ErrorPage;