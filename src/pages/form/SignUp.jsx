import logImg from '../../assets/images/login/login.svg'
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { createUserByEmailPass, loading } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.uname.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // createUserByEmail and Pass
        createUserByEmailPass(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    if (loading) {
        return <p className="w-full h-screen flex justify-center items-center">loading...</p>
    }
    return (
        <div className='my-9'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={logImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" name='uname' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">Sign Up</button>
                            </div>
                        </form>
                        <div className='space-y-3 mb-9'>
                            <p className='text-center'>Or Sign in With</p>
                            <div className='flex justify-center items-center gap-4'>
                                <button className='bg-gray-100 rounded-full p-3'><IoLogoFacebook /></button>
                                <button className='bg-gray-100 rounded-full p-3'><FcGoogle /></button>
                                <button className='bg-gray-100 rounded-full p-3'><FaGithub /></button>
                            </div>
                            <p className='text-center'>Already Registered? <Link className='text-[#FF3811]' to={'login'}>Log In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;