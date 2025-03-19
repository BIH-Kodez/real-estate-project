// src/components/ui/Button.jsx
import { motion } from "framer-motion";

const Button = ({ className, children, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button; // Must have this line