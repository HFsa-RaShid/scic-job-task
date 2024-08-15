import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../PROVIDER/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
          .then(() => {
            navigate('/');
          })
          .catch(error => {
            console.error("Error during sign out:", error);
          });
      };
    return (
        <div className="navbar bg-purple-400 flex justify-between">
            <NavLink to='/' className="btn btn-ghost text-xl">daisyUI</NavLink>

            {user ? (
            <>
            
            <button onClick={handleSignOut} className="btn btn-outline border-0 border-b-4 border-t-2 border-white text-[14px] md:text-[18px] text-white  px-2  font-bold">Sign Out</button>
            </>
             
          ) : (
            <NavLink to='/login'>
              <button className="btn btn-outline border-0 border-b-4 border-t-2 border-white text-white px-3 text-xl font-bold">Sign In</button>
            </NavLink>
          )}
            
        </div>
    );
};

export default Navbar;