import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Import Supabase client
import { IoMenu, IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log("Fetching user...");
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      }
      console.log("Fetched user:", user);
      setUser(user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event, session);
      setUser(session?.user || null);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => {
    setMenuVisible(false);
    setDropdownOpen(false); // Close dropdown on navigation
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setDropdownOpen(false);
      closeMenu();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-5 bg-white shadow-md lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link to="/" className="text-2xl md:text-3xl font-extrabold cursor-pointer">
          Amica <span className="text-[#00A4EF]">Event</span>
        </Link>

        <button 
          className="text-3xl cursor-pointer lg:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuVisible ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      <ul className={`lg:flex lg:items-center absolute lg:static bg-white w-full lg:w-auto left-0 transition-all duration-300 ease-in-out 
          ${menuVisible ? 'block top-[75px] border-t-2 lg:border-0' : 'hidden'}`}
      >
        {["Home", "Categories", "Services", "Contact"].map((item) => (
          <NavLink key={item} to={`/${item.toLowerCase()}`} onClick={closeMenu}
            className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}
          >
            <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">
              {item}
            </li>
          </NavLink>
        ))}

        {user ? (
          <>
            <NavLink to="/cart" onClick={closeMenu} 
              className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}
            >
              <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Cart</li>
            </NavLink>
            
            {/* User Profile Dropdown (Click to Toggle) */}
            <div className="relative mx-4 my-4 cursor-pointer" ref={dropdownRef}>
  <div 
    className="flex items-center gap-2" 
    onClick={toggleDropdown} 
  >
    <FaUserCircle size={24} className="text-[#00A4EF]" />
    <span className="text-lg xl:text-xl">{user?.user_metadata?.name || "User"}</span>
  </div>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                >
                  <NavLink
                    to="/profile"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                    onClick={closeMenu}
                  >
                    User Profile
                  </NavLink>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                  >
                    Sign Out
                  </button>
                </div>


              )}
            </div>

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
