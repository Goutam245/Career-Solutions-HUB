import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  // Prefill email from the query parameter
  useEffect(() => {
    const prefilledEmail = searchParams.get("email");
    if (prefilledEmail) {
      setEmail(prefilledEmail);
    }
  }, [searchParams]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // alert("Password reset link sent! Check your email.");
        setTimeout(() => {
            navigate('/'); // Redirect to homepage after success
          }, 2000); // Delay to allow user to see the success message
      })
      .catch((error) => alert(error.message));
  };
 const sent=()=>{
    toast.success("Password reset link sent! Check your email.");

 }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Forgot Password</h1>
          <p className="py-2">Enter your email to reset your password.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleResetPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={sent} className="btn btn-primary">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
