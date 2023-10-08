import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState('menu');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuIcon((prevIcon) => (prevIcon === 'menu' ? 'close' : 'menu'));
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="p-5 bg-white shadow lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center">
        <Link to='/'><span className="text-2xl md:text-3xl font-extrabold cursor-pointer">
        EventCraft<span className='text-[#00A4EF]'>Hub</span>
        </span></Link>

        <span className="text-3xl cursor-pointer mx-2 lg:hidden block">
          <ion-icon name={menuIcon} onClick={toggleMenu}></ion-icon>
        </span>
      </div>

      <div>
      <ul
        className={`lg:flex lg:items-center z-[100] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 ${menuVisible ? 'opacity-100 top-[75px] border-t-2' : 'opacity-0 top-[-400px]'}`}
      >
        <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-xl hover:text-cyan-500 duration-500">Home</li>
        </NavLink>
        <NavLink to="/categories" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-xl hover:text-cyan-500 duration-500">Categories</li>
        </NavLink>
        <NavLink to="/services" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-xl hover:text-cyan-500 duration-500">Services</li>
        </NavLink>
        <NavLink to="/contactus" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-xl hover:text-cyan-500 duration-500">Contact</li>
        </NavLink>
        <NavLink to='/login'>
        <button className="bg-cyan-400 text-white duration-500 px-6 text-lg py-2 mx-4 hover:bg-cyan-500 rounded-lg mb-4 lg:mb-0">
          Login
        </button>
        </NavLink>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
