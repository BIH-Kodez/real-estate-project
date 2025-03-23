// src/components/InvestmentCTA.jsx
import { motion } from "framer-motion";

const ConfidenceCTA = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green via-white to-green-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Invest in real estate with<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              confidence
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands of investors building wealth through our curated real estate opportunities. 
            Get started with as little as $500 and watch your portfolio grow.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300"
          >
            Invest Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConfidenceCTA;
  