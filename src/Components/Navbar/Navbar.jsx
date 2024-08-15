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
        <div className="navbar bg-[#9b3869]  flex justify-between">
            <NavLink to='/' className="btn btn-ghost text-xl text-white">daisyUI</NavLink>

            {user ? (
            <>
            
            <button onClick={handleSignOut} className="btn btn-outline border border-white text-[14px] md:text-[18px] text-white  px-2 mr-4  font-bold hover:bg-white hover:text-[#9b3869]">Sign Out</button>
            </>
             
          ) : (
            <NavLink to='/login'>
              <button className="btn btn-outline border border-white text-white px-3 text-xl font-bold mr-4 hover:bg-white hover:text-[#9b3869]">Sign In</button>
            </NavLink>
          )}
            
        </div>
    );
};

export default Navbar;