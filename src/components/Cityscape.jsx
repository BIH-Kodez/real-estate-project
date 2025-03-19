import React from "react";
import { motion } from "framer-motion";
import CityBackground2 from "../assets/images/Citybackground2.svg"; // Ensure correct import

const Cityscape = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-[80vh] min-h-[300px] bg-gradient-to-t from-green-50 to-white"
    >
      <img 
        src={CityBackground2} 
        alt="Modern city buildings" 
        className="w-full h-full object-contain object-bottom px-4"
      />
    </motion.div>
  );
};

export default Cityscape;

