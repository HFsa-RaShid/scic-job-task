import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <NavLink to='/' className="btn btn-ghost text-xl">daisyUI</NavLink>
            <NavLink to='/login' className="pr-10"><button>SignIn</button></NavLink>
        </div>
    );
};

export default Navbar;