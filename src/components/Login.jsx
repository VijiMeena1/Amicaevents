import React, { useState } from "react";
import Logo from "../assets/illustration.svg";
import { Helmet } from 'react-helmet-async';
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../SupabaseContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithPassword, signInWithGoogle, signInWithFacebook } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await signInWithPassword(email, password);
        toast.success("Login successful!");

        // Ensure redirection works properly
        const redirectTo = location.state?.from || "/";
        navigate(redirectTo, { replace: true });
    } catch (error) {
        setLoginError(error.message || "Invalid email or password");
    }
};


  const handleSocialLogin = async (provider) => {
    try {
      if (provider === "google") await signInWithGoogle();
      if (provider === "facebook") await signInWithFacebook();
      navigate(location?.state || "/");
    } catch (error) {
      setLoginError(`Failed to sign in with ${provider}`);
    }
  };

  return (
    <div className="py-8 lg:py-20 bg-gray-50">
      <Helmet>
        <title>Sign In to Your Account</title>
      </Helmet>
      <section>
        <div className="flex flex-row-reverse md:gap-12 gap-16 items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
          <div className="hidden md:inline-block">
            <img src={Logo} alt="Login Illustration" />
          </div>
          <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold text-gray-900 md:text-3xl mb-6 lg:mb-8">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@domain.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {loginError && (
                  <div className="text-red-500 text-sm text-center py-2">
                    {loginError}
                  </div>
                )}
                <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center">
                  Sign in
                </button>
                <button type="button" className="w-full text-sm hover:bg-gray-200 border-2 border-gray-200 font-medium rounded-lg px-5 py-2 md:py-2.5 text-center flex items-center justify-center gap-2" onClick={() => handleSocialLogin("google")}>
                  <img src={Google} className="h-7 w-7" alt="Google" />
                  <span>Sign in with Google</span>
                </button>
                <button type="button" className="w-full text-sm hover:bg-gray-200 border-2 border-gray-200 font-medium rounded-lg px-5 py-2.5 md:py-3.5 text-center flex items-center justify-center gap-2" onClick={() => handleSocialLogin("facebook")}>
                  <img src={Facebook} className="h-5 w-5" alt="Facebook" />
                  <span>Sign in with Facebook</span>
                </button>
                <p className="text-sm font-light text-gray-500 text-center">
                  Don’t have an account yet? <Link to='/signup' className="font-medium text-blue-500 hover:underline">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}
