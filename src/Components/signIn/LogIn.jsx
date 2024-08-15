import { Link, useLocation, useNavigate} from "react-router-dom";
import login from '../../assets/bg.jpg';
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../PROVIDER/AuthProvider";
import GoogleLogin from "./GoogleLogin";

const LogIn = () => {

    const {signInUser}=useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
     const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            toast.success('Sign In successfully');    
            setTimeout(() => {
                const from = location.state?.from || '/';
                navigate(from, { replace: true });
            }, 1000);
        })
        .catch(error => {
            console.error(error);
            toast.error('Invalid email or password. Please try again.');
        });
    }
    return (
        <div className="max-w-screen-xl">
            <Helmet>
                <title>Sign_In | EduConnect</title>
            </Helmet>
        <div className="">
            
            
            <div className="max-w-md  bg-base-100 flex items-center mx-auto ">
               
            <form className="card-body border border-[#9b3869] my-8" onSubmit={handleSignIn}>
            <h1 className="text-4xl text-center font-bold mb-2 text-[#9b3869]">Sign In Now!!</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input
                 border border-[#9b3869]" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Password</span>
                </label>
                <div className="flex relative">
                     <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input w-full border border-[#9b3869]" required />
                    <button type="button" className="absolute right-3 top-4" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
               
                
                {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
                </div>
                <div className="form-control mt-2">
               
                <button type="submit" className="btn btn-outline  border border-[#9b3869] text-[#9b3869] px-3 text-xl font-bold w-full hover:bg-[#9b3869] hover:text-white">Sign In</button>
                <div className="divider">OR</div>
                
                <GoogleLogin></GoogleLogin>
                
            
                </div>
                <p className="text-center">New to EduConnect? Please <Link to="/signup">
                            <button className="text-blue-400 underline font-bold">Sign Up</button>
                        </Link></p>
            </form>
            </div>
            
            </div>
            <ToastContainer />
        </div>
       
    );
};

export default LogIn;