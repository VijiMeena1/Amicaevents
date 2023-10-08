import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Hourglass } from 'react-loader-spinner';
import { Helmet } from 'react-helmet-async';

export default function Card() {
  const { data } = useLoaderData();

  if (!data) {
    return (
      <div className='flex h-screen items-center justify-center text-4xl md:text-5xl flex-col gap-8'>
        <div>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div>
        Loading...
      </div>
    );
  }

  const {title, description, price, image, category } = data;

  return (
    <div className='px-5 md:px-10 lg:px-20'>
              <Helmet>
        <title>{title} - {category} - Your Ultimate Event Management Destination</title>
      </Helmet>
      <div className='py-5 md:py-10 relative'>
        <img className='rounded-md object-cover w-full' src={image} alt={title} />
      </div>
      <div>
        <h2 className='mb-6 mt-4 md:mt-0 lg:mb-8 text-2xl md:text-4xl font-extrabold text-gray-900 font-serif'>{title}</h2>
        <p className='text-lg mb-10'>{description}</p>
      </div>
    </div>
  );
}
