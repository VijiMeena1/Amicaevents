import React, { useState, useEffect } from 'react';
import { useAuth } from '../SupabaseContext';
import { Navigate } from 'react-router-dom';

export default function Profile() {
  const { user, loading } = useAuth();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/photo.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGallery(data.gallery);
      } catch (error) {
        console.error('Error fetching photo.json:', error);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p>Loading...</p>; // ✅ Prevents UI flickering
  if (!user) return <Navigate to="/login" />; // ✅ Redirects to login if no user

  return (
    <div data-aos="fade-up" data-aos-duration="3000"
      className="p-4 mx-5 md:mx-10 lg:mx-20 mt-24 md:mt-32 mb-20 rounded-lg bg-gray-100">
      <div className='flex flex-col items-center justify-center'>
        <img
          className='rounded-full shadow-xl -mt-20 h-40 w-40 md:h-48 md:w-48 object-cover mb-8'
          src={user?.user_metadata?.avatar_url || 'https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000'}
          alt="User Avatar"
        />
        <h2 className='text-2xl md:text-3xl font-semibold mb-1 md:mb-2'>{user?.user_metadata?.name || 'User'}</h2>
        <p className='italic text-lg text-gray-700 mb-5 lg:mb-6'>{user?.email}</p>
        <div className='border-b-2 border-gray-600 w-[90%] opacity-20'></div>
      </div>
      <div className='mx-5 md:mx-8 my-10'>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 lg:mb-8">
          Gallery:
        </h2>
      </div>
      <div className='flex items-center justify-center mx-5 md:mx-8 mb-10 lg:mb-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          {gallery.map((img, index) => (
            <div key={index} className='h-60 w-60 shadow'>
              <img className='object-cover h-60 w-60' src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
