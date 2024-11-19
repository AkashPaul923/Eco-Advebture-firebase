import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
    const { user, handleSignOut } = useContext( AuthContext )
    // console.log(name);
    const links = <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/myprofile">My Profile</NavLink></li>
                    <li><NavLink to="/auth/register">register</NavLink></li>
                </>
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg  xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                </ul>
            </div>
            <h2 className=" text-xl">Eco-Adventure Experiences</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {
                    links
                }
            </ul>
        </div>
        <div className="navbar-end">
            {
                user && <div className="tooltip hover:tooltip-open tooltip-left" data-tip= {user.displayName }>
                    <img className="h-12 w-12 object-cover rounded-full mr-3" src={ user.photoURL} alt="" /></div>
            }
            {
                user ? <button onClick={handleSignOut} className="btn">Log Out</button> 
                : <Link to="/auth/login" className="btn">Log in</Link>
            }
            
        </div>
    </div>
  );
};

export default Navbar;
