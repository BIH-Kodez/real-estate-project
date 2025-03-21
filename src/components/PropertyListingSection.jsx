import { motion } from "framer-motion";
import Button from "./ui/Button";
import TexasHouse from '../assets/images/properties/TexasHouse.jpg';
import MiamiHouse from '../assets/images/properties/MiamiHouse.jpg';
import ArizonaHouse from '../assets/images/properties/ArizonaHouse.jpg';

const properties = [
  {
    title: "Modern downtown condo",
    location: "Austin, Texas",
    image: TexasHouse, // Replace with actual image path
    sqft: "1,200",
    beds: "2",
    baths: "2",
    price: "$4,500",
    returnRate: "56%"
  },
  {
    title: "Luxury oceanfront apartment",
    location: "Miami, Florida",
    image: MiamiHouse,
    sqft: "1,500",
    beds: "3",
    baths: "2",
    price: "$2,900",
    returnRate: "54%"
  },
  {
    title: "Spacious family home",
    location: "Phoenix, Arizona",
    image: ArizonaHouse,
    sqft: "1,200",
    beds: "2",
    baths: "2",
    price: "$6,200",
    returnRate: "62%"
  }
];

const PropertyListingSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover our top investment properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore handpicked real estate opportunities with high growth potential and strong returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image with zoom effect */}
              <motion.div
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent" />
              </motion.div>

              {/* Property Details */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                <p className="text-gray-600 mt-2">{property.location}</p>
                
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="font-medium">{property.sqft}</span> sq.ft
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    🛏 {property.beds} Bed
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    🚿 {property.baths} Bath
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      {property.price}
                    </span>
                    <span className="ml-2 text-gray-600">({property.returnRate})</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="hidden group-hover:block"
                  >
                    <Button className="bg-green-600 hover:bg-green-700">
                      Invest now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListingSection;