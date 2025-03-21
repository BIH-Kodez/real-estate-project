// src/components/InvestmentProcessSection.jsx
import { motion } from "framer-motion";
import Button from "./ui/Button";

const steps = [
  {
    title: "Discover properties",
    description: "Browse a wide range of carefully curated real estate opportunities tailored to your investment goals.",
    step: 1
  },
  {
    title: "Invest with confidence",
    description: "Review in-depth property insights, assess potential returns, and make secure investments with ease.",
    step: 2
  },
  {
    title: "Earn & track",
    description: "Start generating passive income keeping full control of your investments with real time performance tracking.",
    step: 3
  },
  {
    title: "Grow wealth",
    description: "Follow our transparent, data-driven process and start building wealth through real estate today",
    step: 4
  }
];

const InvestmentProcessSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-green-100 to-emerald-80">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Invest with confidence in just a few steps
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
            Start investing now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProcessSection;