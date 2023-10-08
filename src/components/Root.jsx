import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
       <div className="w-full bg-neutral-100">
         <div className="md:max-w-[1650px] mx-auto   ">
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
       </div>
    );
};

export default Root;