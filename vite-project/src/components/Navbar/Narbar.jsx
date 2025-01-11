import React, { useState } from 'react';
import { NavbarMenu } from '../../mockData/Data';
import { FaHome, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-20 border-b border-gray-200">
      <div className="container flex justify-between items-center py-4 px-6">
        {/* Logo section */}
        <div className="logo flex items-center gap-3 font-bold uppercase mr-8 text-2xl">
          <FaMapMarkerAlt className="text-3xl text-primary" />
          <p className="text-primary text-base font-extrabold">Penang Travel</p>
        </div>

        {/* Icon section (Desktop Only) */}
        <div className="hidden md:flex">
          <ul className="navbar-menu flex items-center gap-8 text-gray-700 text-sm">
            {NavbarMenu.map((item) => (
              <li key={item.id} className="navbar-item flex items-center space-x-1 transition-all duration-200 hover:text-primary">
                {item.title === "Home" && <FaHome className="text-2xl text-gray-600" />}
                {item.title === "Things to Do" && <MdAttractions className="text-4xl text-gray-600" />}
                {item.title === "Food & Dining" && <IoRestaurantOutline className="text-3xl text-gray-600" />}
                {item.title === "Shopping" && <FaShoppingBag className="text-xl text-gray-600" />}
                {item.title === "Where to Stay" && <FaHotel className="text-3xl text-gray-600" />}
                <a href={item.link} className="navbar-link inline-block py-2 px-4 font-semibold transition-all duration-200">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <FaBars className="text-4xl text-gray-700 hover:text-primary" onClick={handleHamburgerClick} />
        </div>
      </div>

      {/* Mobile menu (Framer Motion for animation) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden flex flex-col bg-red-500 py-4" 
          >
            <ul className="navbar-menu flex flex-col items-center gap-4 text-white text-sm">  
              {NavbarMenu.map((item) => (
                <li key={item.id} className="navbar-item transition-all duration-200 hover:text-primary">
                  <a href={item.link} className="navbar-link py-2 px-4 font-semibold">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;