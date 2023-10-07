import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {

  const {user , logOut} = useContext(AuthContext)

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch(error => {
      console.error(error)
    })
  }

  const navLinks = (
    < >
      <NavLink
        to="/" className="text-2xl rounded-xl p-3"
        style={({ isActive }) => {return {fontWeight: isActive ? "bold" : "",backgroundColor: isActive ? "pink" : "",};}}>Home</NavLink>

      <NavLink
        className="text-2xl rounded-xl p-3"
        to="/events"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "pink" : "",
           
          };
        }}
      >
        Events
      </NavLink>
      <NavLink className="text-2xl rounded-xl p-3"
        to="/contact"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "pink" : "",
          };
        }}
      >
        Contact
      </NavLink>

      
    </>
  );

  return (
    <div>
      <div className="navbar bg-neutral-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <h3 className="font-Monsieur text-5xl text-fuchsia-600 font-extrabold my-4">
            Dazzling Days{" "}
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? <button onClick={handleSignOut}>Sign Out </button>
            :
            <NavLink
            className="text-2xl rounded-xl p-3"
            to="/login"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "pink" : "",
               
              };
            }}
          >
            Login
          </NavLink>
          }



         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
