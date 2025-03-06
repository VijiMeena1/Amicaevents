import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../SupabaseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../SupabaseClient";

export default function Signup() {
  const navigate = useNavigate();
  const { signUpWithEmail } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signupError, setSignupError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError(null);
  
    try {
      // Step 1: Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name: name }, // Storing name in Supabase Auth user_metadata
        },
      });
  
      if (error) throw new Error(error.message);
  
      // Step 2: Check if user is null (because email confirmation is required)
      if (!data?.user) {
        toast.success("Signup successful! Please check your email to verify your account.");
        
        // Delay navigation slightly to allow the toast to be seen
        setTimeout(() => {
          navigate("/login");
        }, 3000); // 3 seconds delay
  
        return;
      }
  
      // Step 3: Insert user into your custom users table (if user exists)
      const userId = data.user.id;
  
      const { error: dbError } = await supabase.from("users").insert([
        { id: userId, email, name }
      ]);
  
      if (dbError) throw new Error(dbError.message);
  
      toast.success("Signup successful! Please check your email to verify your account.");
      
      // Delay navigation slightly
      setTimeout(() => {
        navigate("/login");
      }, 3000);
  
    } catch (error) {
      console.error("Signup failed:", error.message);
      setSignupError(error.message);
    }
  };
  
  

  

  return (
    <div className="py-8 lg:py-20 bg-gray-50">
      <Helmet>
        <title>Sign Up for an Account</title>
      </Helmet>
      <section>
        <div className="flex items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold text-gray-900 md:text-3xl">
                Create an Account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                  <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {signupError && (
                  <div className="text-red-500 text-sm mt-2">{signupError}</div>
                )}
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}