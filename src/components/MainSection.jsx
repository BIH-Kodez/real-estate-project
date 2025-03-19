import React from "react";
import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex-1 bg-gradient-to-b from-green-50 to-white flex flex-col"
    >
      {/* Content Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full mx-auto text-center pt-20 px-4 sm:px-6 flex-grow"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl pt-20 md:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          Invest in Property,<br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Build Your Future
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Diversify your portfolio with carefully curated real estate investments that combine security and exceptional returns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          className="mt-5 flex flex-col sm:flex-row justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-3.5 rounded-xl hover:bg-gray-800 transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Browse Properties
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3.5 rounded-xl hover:opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Invest Now
          </motion.button>
        </motion.div>
      </motion.div>

      
    </motion.section>
  );
};

export default MainSection;


