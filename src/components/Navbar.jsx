import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[90%] lg:w-[75%] xl:w-[70%] bg-white border border-gray-200 shadow-lg rounded-full py-3 px-4 sm:px-6 md:px-8 flex justify-between items-center z-50"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-700 md:mr-4 lg:mr-8 whitespace-nowrap">livest</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow justify-center space-x-4 lg:space-x-6 xl:space-x-8 text-gray-700 font-medium">
        <a href="#" className="font-bold text-black">Home</a>
        <a href="#" className="hover:text-green-600">Properties</a>
        <div className="relative group">
          <a href="#" className="hover:text-green-600 flex items-center">
            Loan <span className="ml-1 text-sm">▼</span>
          </a>
        </div>
        <a href="#" className="hover:text-green-600">About</a>
        <a href="#" className="hover:text-green-600">Contact</a>
      </div>

      {/* Auth Buttons - Adjusted for medium screens */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-6 ml-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border border-gray-700 px-4 md:px-4 lg:px-5 py-2 rounded-full text-gray-700 hover:bg-gray-200 transition-all whitespace-nowrap text-sm md:text-base"
        >
          Log in
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-5 md:px-5 lg:px-6 py-2 rounded-full hover:bg-gray-800 transition-all whitespace-nowrap text-sm md:text-base"
        >
          Join now
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white border-t shadow-md flex flex-col items-center py-4 space-y-4"
          >
            <a href="#" className="text-black font-bold">Home</a>
            <a href="#" className="hover:text-green-600">Properties</a>
            <a href="#" className="hover:text-green-600">Loan</a>
            <a href="#" className="hover:text-green-600">About</a>
            <a href="#" className="hover:text-green-600">Contact</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-gray-700 px-5 py-2 rounded-full text-gray-700 hover:bg-gray-200 w-3/4"
            >
              Log in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 w-3/4"
            >
              Join now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;


