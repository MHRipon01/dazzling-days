import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };


  const navLinks = (
    <>
      <NavLink
        to="/"
        className="text-2xl font-Cormorant font-medium rounded-xl p-3"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "#e8dfcf" : "",
          };
        }}
      >
        Home
      </NavLink>

      <NavLink
        className="text-2xl font-Cormorant  font-medium rounded-xl p-3"
        to="/events"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "#e8dfcf" : "",
          };
        }}
      >
        Events
      </NavLink>
      <NavLink
        className="text-2xl font-Cormorant font-medium rounded-xl p-3"
        to="/contact"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "#e8dfcf" : "",
          };
        }}
      >
        Reservation
      </NavLink>
    </>
  );

  return (
    <div className="max-w-full md:max-w-full">
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
          <h3
            id="logoName"
            className=" text-4xl font-semibold md:text-6xl md:font-extrabold text-[#e8b67d]  my-4"
          >
            Dazzling Days{" "}
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end md:flex justify-center items-center text-center ">
          
          {user ? (
            <>
             {
              user.photoURL ? <img className="w-[60px] h-[50px] md:w-12 rounded-full  md:mr-3" src={user.photoURL} alt="" /> 
               
              
              :
              <img className="rounded-full w-10  mr-1 md:mr-3" src="https://i.ibb.co/WHrCzF1/user.png" alt="" />
             } 
             
             <div className="md:flex justify-center items-center ">
             <div className="text-lg font-bold font-Cormorant">{user.displayName}</div>
              <div>
              <button className="btn font-Cormorant font-bold" onClick={handleSignOut}>Sign Out
             </button>
              </div>
             </div>
            </>
          ) : (
            <div>
              <NavLink
                className="text-2xl font-Cormorant rounded-xl p-3"
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
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
