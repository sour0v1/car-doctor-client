import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
    // const {loading} = useContext(AuthContext);
    // if(loading){
    //     return <p className="w-full h-screen flex justify-center items-center">loading...</p>
    // }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;