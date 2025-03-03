import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import {Helmet} from "react-helmet"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
const Login = () => {
  const{signInWithGoogle,userLogin,setUser}=useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [ownemail, setEmail] = useState(''); 
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };




  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setEmail(email);
    userLogin(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      setUser(user)
      
      navigate(location?.state?location.state:"/")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

  }
  const notify = () => toast("Log In Successful!");
    return (
        <div className="hero bg-base-200 min-h-screen">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
                
            </Helmet>
  <div className="hero-content flex-col gap-5">
    <div className="text-center lg:text-left">
      <h1 className=" text-center text-3xl font-bold mb-10 text-gray-800">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email:</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered border-blue-400 border-dashed " onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password:</span>
          </label>
          <div className='relative'>
          <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered  border-blue-400 border-dashed" required />

          <button
                type="button"
                 className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)} // Toggle the visibility
              >
                {showPassword ? (
                 <FaRegEye />
                ) : (
                  <FaRegEyeSlash />
                )}
              </button>


              </div>





          <label className="label">
          <NavLink
                  to={`/forgot-password?email=${encodeURIComponent(ownemail)}`}
                  className="text-blue-500 hover:text-blue-800 text-sm"
                >
                  Forgot password?
                </NavLink>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={notify} className="btn btn-error">Login</button>
        </div>
        <button onClick={handleGoogleLogin} className="btn btn-info">
                Login with Google
              </button>


       <p>New User? Please <NavLink to = "/auth/register"><span className='text-blue-500'>Register </span></NavLink></p>
      </form>
      
    </div>
  </div>




   







  <ToastContainer></ToastContainer>
</div>
    );
};

export default Login;