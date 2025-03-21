import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    title: "Steady returns",
    description: "Earn reliable returns without day-to-day involvement",
    icon: "📈",
  },
  {
    title: "Reliable growth",
    description: "Backed by data and expert analysis for long-term success",
    icon: "💰",
  },
  {
    title: "Clear insights",
    description: "Track your investment with real-time insights",
    icon: "📊",
  },
  {
    title: "Expert assistance",
    description: "Get expert help tailored to your financial goals",
    icon: "🤝",
  },
  {
    title: "Long-term value",
    description: "Invest in appreciating assets with strong future value",
    icon: "⏳",
  },
  {
    title: "Stress-free investing",
    description: "We handle the complexities while you enjoy the returns",
    icon: "🏡",
  },
];

const InvestmentAdvantages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Your real estate investment advantage
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-4">
          From curated properties to end-to-end management, we simplify investing so you can focus on growing your wealth.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <span className="text-4xl">{advantage.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{advantage.title}</h3>
              <p className="text-gray-600 mt-2">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
          >
            Find the best for you
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAdvantages;
