import { useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Eye, EyeOff } from "lucide-react"; // Icons for password visibility
import illustration from "@/assets/illustration.svg"; 
import googleIcon from "@/assets/google.svg"; 

const supabase = createClient(
  "https://nmddffdndgincdaifdqr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZGRmZmRuZGdpbmNkYWlmZHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNDM1MDYsImV4cCI6MjA1NTgxOTUwNn0.A2iJgxUK2gOoOZCn00gupMMoIwSNMF3C_Ycbdl6QZ50"
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Email + Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      console.log("Login Successful");
    }
  };

  // Google OAuth Login
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "https://amicaevents.vercel.app/auth/callback" },
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {/* Email + Password Form */}
        <form onSubmit={handleEmailLogin} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Your email</label>
            <input
              type="email"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Sign in
          </button>
        </form>

        {/* Google OAuth Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <img src={googleIcon} alt="Google" className="h-5 mr-2" />
          Sign in with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-sm font-light text-gray-500 text-center mt-4">
          Don't have an account yet?{" "}
          <Link to="/signup" className="font-medium text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side Illustration (Hidden on Small Screens) */}
      <div className="hidden md:flex w-1/2 justify-center">
        <img src={illustration} alt="Login Illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
}
