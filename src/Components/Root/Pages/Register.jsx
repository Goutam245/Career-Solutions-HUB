import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const {createNewUser,setUser, updatedProfile} = useContext(AuthContext)
  const navigate =useNavigate()
  const [showPassword, setShowPassword] = useState(false); 
  const [error,setError]=useState({})
  const handleSubmit =(e)=>{
    e.preventDefault()
    //get data
    const form = new FormData(e.target)
    const name = form.get("name")
    const image = form.get("image")
    if(name.length<5){
      setError({ ...error,name:"Name must be 5 characters long"})
      return
    }
    const email = form.get("email")
    const password = form.get("password")

    // console.log({name,email,password});
    createNewUser(email,password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      setUser(user)
      // console.log(user);
      updatedProfile(
        {displayName:name,
          photoURL: image,
        }
      )
      .then(()=>{
        navigate("/")
      })
      .catch((err)=>{alert(err)})
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode)
    });
    
  }
  const notify = () => toast("Registration Successful!");
  
    return (
        <div className="hero bg-base-200 min-h-screen">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <div className="hero-content flex-col gap-5">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>
        {
          error.name && (
            <label> {error.name}</label>
          )
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input name='image' type="url" placeholder="Image URL" className="input input-bordered" required />
        </div>




        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='relative'>
          <input name='password' placeholder="password" className="input input-bordered" type={showPassword ? "text" : "password"} required />
          <button
                type="button"
                 className="absolute inset-y-0 right-5 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)} // Toggle the visibility
              >
                {showPassword ? (
                 <FaRegEye />
                ) : (
                  <FaRegEyeSlash />
                )}
              </button>
              </div>
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button onClick={notify} className="btn btn-primary">Register</button>
        </div>
       <p>Already Registerd? Please <NavLink to = "/auth/login"><span className='text-blue-500'>Log In </span></NavLink></p>
      </form>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
};

export default Register;