// InvestmentGridSection.jsx
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Houseonebeach from "../assets/images/Houseonbeach.jpg";




const InvestmentGridSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Unlock the numbers behind smart property investments
          </h2>
          <p className="text-lg text-gray-600">
            Find the best property from the market. We analyze all the properties and pick best for you.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
            Find the best for you
          </Button>
        </motion.div>

        {/* Right Column - Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Invest Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-gray-50 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Invest</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-600 rounded-full" />
                <span>AI optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-600 rounded-full" />
                <span>Access to best property suppliers</span>
              </li>
            </ul>
          </motion.div>

          {/* Stats & Property Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-8"
          >
            {/* Investor Trust Card */}
            <div className="p-8 bg-green-50 rounded-xl">
              <div className="text-5xl font-bold text-green-600">95%</div>
              <div className="text-gray-600 mt-2">INVESTOR TRUST</div>
            </div>

            {/* Property Card with Image */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
              {/* Property Image */}
              <img
                src={Houseonebeach}    // Update this path based on your actual project structure
                alt="Luxury Oceanfront Property"
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-155"
              />

              {/* Property Details */}
              <div className="flex justify-between items-start mt-4">
                <div>
                  <h3 className="text-xl font-bold">Luxury Oceanfront</h3>
                  <p className="text-gray-600">Miami, Florida</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✓ 1,500 sq.ft</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✅ 3 Bed</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentGridSection;