import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate(null);
    const {signoutUser} = useContext(AuthContext);
    const handleSignOut = () =>{
        signoutUser()
            .then(() => {
                console.log('Sign out successfully');
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        {user?.email ? <p><button onClick={handleSignOut}>Sign Out</button></p> :
        <NavLink to={'/login'}>Log In</NavLink>}
        {
            user?.email ? <NavLink to={'/bookings'}>Bookings</NavLink> :
            <NavLink to={'/sign-up'}>Sign Up</NavLink>
        }       
        
        
        
    </>
    return (
        <div className="my-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-16 h-16" src="/logo.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn border-[#FF3811] text-[#FF3811]">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;