
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../PROVIDER/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // Update profile with displayName
                return updateUserProfile(data.name);
            })
            .then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    image: 'https://i.ibb.co/x30r6Bk/images.png'
                };
                return axiosPublic.post('/users', userInfo);
            })
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Registered successfully');
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/')
                    }, 500);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error during registration');
            });
    };

    return (
        <div className="mx-auto">
            <Helmet>
                <title>Sign_Up | EduConnect</title>
            </Helmet>
            <div className="">
                
                <div className=" bg-base-100 flex mx-auto items-center max-w-md">
                    <form className="card-body border border-[#9b3869] w-full  my-8" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl text-[#9b3869] text-center font-bold mb-2">Sign Up Here!!</h1>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input border border-[#9b3869]"
                            />
                            {errors.name && <span className="text-red-700 italic">Name is required</span>}
                        </div>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="input border border-[#9b3869]"
                            />
                            {errors.email && <span className="text-red-700 italic">Email is required</span>}
                        </div>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                {...register("password", {
                                    required: true,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                    minLength: 6,
                                    maxLength: 20
                                })}
                                placeholder="Password"
                                className="input border border-[#9b3869]"
                            />
                            {errors.password?.type === 'required' && <span className="text-red-700 italic">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-700 italic">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-700 italic">Password must be less than 20 Characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-700 italic">Password must have 1 upper case,1 lower case, 1 number & 1 special Character</span>}
                        </div>
                       
                        <div className="form-control mt-1">
                            <button type="submit" value="sign Up" className="btn btn-outline border border-[#9b3869] text-[#9b3869] px-3 text-xl font-bold w-full hover:bg-[#9b3869] hover:text-white">Sign Up</button>
                        </div>
                        <p className="text-center mt-1">
                            Already have an account? Please <Link to="/login">
                                <button className="text-blue-400 underline font-bold">Sign In</button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
