import React from "react";
import Logo from "../assets/login.svg";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
export default function Signup() {
  return (
    <div className="py-8 lg:py-20 bg-gray-50">
                  <Helmet>
        <title>Start Your Journey with Us: Sign Up</title>
      </Helmet>
      <section>
        <div className="flex md:gap-12 gap-16 items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
          <div className="hidden md:inline-block">
            <img className="h-[591px] w-[608px]" src={Logo} alt="logo" />
          </div>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl mb-6 lg:mb-8">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    placeholder="name@domain.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#3b82f6]"
                        required
                      />
                    </div>
                    <div className="ml-3 text-xs md:text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                      I accept the {" "}
                      </label>
                      <a href="#" className="text-sm font-medium text-[#3b82f6] hover:underline">Terms and Conditions</a>
                    </div>
                  </div>

                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#3b82f6] hover:bg-[#2563eb] focus:ring-4 focus:outline-none focus:ring-[#3b82f6] font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Sign in
                </button>

                <button
                  type="submit"
                  className="w-full text-sm hover:bg-gray-200 focus:ring-4 border-2 border-gray-200 font-medium rounded-lg px-5 py-2 md:py-2.5 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>
                        <img src={Google} className="h-7 w-7" alt="" />
                    </span>
                    <p>Sign up with Google</p>
                  </div>
                </button>
                <button
                  type="submit"
                  className="w-full text-sm hover:bg-gray-200 focus:ring-4 border-2 border-gray-200 font-medium rounded-lg px-5 py-2.5 md:py-3.5 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>
                    <img src={Facebook} className="h-5 w-5" alt="" />
                    </span>
                    <p>Sign up with Facebook</p>
                  </div>
                </button>

                <p className="text-sm font-light text-gray-500 text-center">
                  Already have an account?{"  "}
                  <Link to='/login'>
                  <p
                    className="font-medium inline text-[#3b82f6] hover:underline md:text-base"
                  >
                    Log in
                  </p>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
