import React from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";
import { Hourglass } from 'react-loader-spinner';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../SupabaseContext';

export default function Card() {
  const { user } = useAuth();
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      const cartItem = {
        title: data.title,
        price: data.price,
        image: data.image,
        category: data.category,
      };

      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = [...existingCart, cartItem];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.success("Added to cart successfully!");
    }
  };

  const handleSelectVenue = () => {
    navigate(`/select-venue/${data.title}`);
  };

  if (!data) {
    return (
      <div className='flex h-screen items-center justify-center text-4xl md:text-5xl flex-col gap-8'>
        <Hourglass visible={true} height="80" width="80" ariaLabel="hourglass-loading" colors={['#306cce', '#72a1ed']} />
        Loading...
      </div>
    );
  }

  const { title, description, price, image, category } = data;

  return (
    <div>
      <Helmet>
        <title>{title} - {category}: Your Ultimate Event Management Destination</title>
      </Helmet>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 pb-20 pt-5 lg:pt-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt={title} className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" src={image} />
            <div className="lg:w-1/2 w-full lg:pl-14 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-[#00A4EF] tracking-widest">{category}</h2>
              <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1 md:mb-3">{title}</h1>
              <p className="leading-relaxed">{description}</p>
              <div className="flex items-center mt-3 lg:mt-5">
                <span className="title-font font-medium text-2xl lg:text-3xl text-gray-900">{price}</span>
                <button onClick={handleAddToCart} className="ml-auto text-white bg-[#00A4EF] border-0 py-2 px-6 focus:outline-none hover:bg-[#0989c9] rounded-lg lg:text-lg">
                  Add to Cart
                </button>
                <button onClick={handleSelectVenue} className="ml-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded-lg lg:text-lg">
                  Select Venue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={3000}/>
    </div>
  );
}
