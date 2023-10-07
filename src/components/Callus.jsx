import React from 'react';
import Logo from '../assets/contact.jpg';

const Callus = () => {
  const divStyle = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
  };

  return (
    <div className='flex flex-col items-center justify-center gap-3 lg:gap-5 px-4 lg:px-8 text-white text-center' style={divStyle}>
      <h2 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold'>EventCraftHub is ready to give you a wonderful service</h2>
      <p className='text-sm lg:text-lg italic'>Would love to talk to you, contact us any way you feel comfortable, we'll be waiting</p>
    </div>
  );
};

export default Callus;

