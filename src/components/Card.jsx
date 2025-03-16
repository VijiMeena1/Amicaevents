import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from '../SupabaseContext';
import { supabase } from '../SupabaseClient'; // ✅ Import existing Supabase client
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card() {
  const { user } = useAuth();
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      const { data: venueData, error } = await supabase.from('venues').select('*');
      if (error) {
        console.error("Error fetching venues:", error);
        toast.error("Failed to load venues");
      } else {
        setVenues(venueData);
      }
    };
    fetchVenues();
  }, []);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!selectedVenue) {
      toast.error("Please select a venue before adding to cart");
      return;
    }
    const cartItem = {
      title: data?.title || "Unknown",
      price: data?.price || 0,
      image: data?.image || "",
      category: data?.category || "",
      venue: selectedVenue
    };
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...existingCart, cartItem]));
    toast.success("Added to cart successfully!");
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 pb-20 pt-5 lg:pt-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img 
              alt={data.title} 
              className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" 
              src={data.image || "default-placeholder.jpg"} 
            />
            <div className="lg:w-1/2 w-full lg:pl-14 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-[#00A4EF] tracking-widest">{data.category}</h2>
              <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1 md:mb-3">{data.title}</h1>
              <p className="leading-relaxed">{data.description}</p>
              
              {/* Venue Selection with Enhanced Styling */}
              <label className="block mt-6 text-lg font-medium text-gray-700">Select Venue:</label>
              <select 
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="mt-2 block w-full px-4 py-2 text-gray-700 bg-white border-2 border-[#00A4EF] rounded-lg shadow-sm focus:ring-2 focus:ring-[#00A4EF] focus:border-[#00A4EF] transition duration-200 ease-in-out"
              >
                <option value="" className="text-gray-500">Choose a venue</option>
                {venues.map((venue) => (
                  <option key={venue.id} value={venue.name}>{venue.name}</option>
                ))}
              </select>

              <button 
                onClick={handleAddToCart} 
                className="mt-6 w-full bg-[#00A4EF] hover:bg-[#0989c9] text-white font-bold py-2.5 rounded-lg transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
