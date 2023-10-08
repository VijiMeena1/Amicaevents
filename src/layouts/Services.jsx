import React from "react";
import { Helmet } from 'react-helmet-async'
export default function Services() {
  return (
    <section className="bg-white lg:mt-5">
                    <Helmet>
        <title>Beyond Expectations: Unveiling Our Event Management Solutions</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto">
        <div>
        <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold'>Services</h2>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-8">
              <span className="text-blue-500 uppercase">category</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800">
                Title
              </h1>

              <p className="mt-2 text-gray-500">
                Description
              </p>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:underline hover:text-gray-500"
                  >
                    Price
                  </a>
                </div>
                <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                See Details
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
