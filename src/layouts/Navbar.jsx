import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFirebase } from '../FirebaseContext';
import { signOut } from 'firebase/auth';
import { IoMenu, IoClose } from "react-icons/io5"; // ✅ Replacing ion-icons

const Navbar = () => {
  const { user, auth } = useFirebase();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      closeMenu();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const UserInfo = () => (
    <div className="flex items-center gap-3 mx-3">
      <p className="text-sm md:text-base lg:text-lg">{user?.displayName}</p>
      <img 
        className="h-10 w-10 rounded-full" 
        src={user?.photoURL || "https://i.ibb.co/HzrsZjz/man.png"} 
        alt={user?.displayName || "User Avatar"} 
      />
    </div>
  );

  return (
    <nav className="p-5 bg-white shadow lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link to="/" className="text-2xl md:text-3xl font-extrabold cursor-pointer">
          Amica <span className="text-[#00A4EF]">Event</span>
        </Link>

        {user && <div className="lg:hidden"><UserInfo /></div>}

        {/* ✅ Mobile Menu Button (Replaced ion-icon) */}
        <button 
          className="text-3xl cursor-pointer lg:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuVisible ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`lg:flex lg:items-center absolute lg:static bg-white w-full lg:w-auto left-0 transition-all duration-300 ease-in-out 
          ${menuVisible ? 'block top-[75px] border-t-2 lg:border-0' : 'hidden'}
        `}
      >
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
          <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Home</li>
        </NavLink>
        <NavLink to="/categories" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
          <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Categories</li>
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
          <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Services</li>
        </NavLink>
        <NavLink to="/contactus" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
          <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Contact</li>
        </NavLink>

        {user ? (
          <>
            <NavLink to="/cart" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
              <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Cart</li>
            </NavLink>
            <NavLink to="/profile" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
              <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Profile</li>
            </NavLink>

            <div className="hidden lg:flex"><UserInfo /></div>

            <button 
              onClick={handleSignOut}
              className="bg-cyan-400 text-white duration-500 px-6 text-lg py-2 mx-4 hover:bg-cyan-500 rounded-lg mb-4 lg:mb-0"
            >
              Sign Out
            </button>
          </>
        ) : (
          <NavLink to="/login" onClick={closeMenu}>
            <button className="bg-cyan-400 text-white duration-500 px-6 text-lg py-2 mx-4 hover:bg-cyan-500 rounded-lg mb-4 lg:mb-0">
              Login
            </button>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
