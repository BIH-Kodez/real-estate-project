// StatsSection.jsx
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const statsData = [
  { value: "$500M+", label: "TOTAL INVESTMENTS" },
  { value: "10K+", label: "PROPERTIES MANAGED" },
  { value: "100K+", label: "REGISTERED MEMBERS" },
  { value: "8-10%", label: "AVERAGE ANNUAL ROI" }
];

const AnimatedStat = ({ value, label }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const hasLetters = /\D/.test(value);

  // Extract numerical value and suffix
  const numberValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(numberValue.toString(), '');

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <h3 className="text-3xl font-bold mb-2">
        {!hasLetters ? (
          <CountUp
            end={inView ? numberValue : 0}
            duration={2.5}
            suffix={suffix}
            separator=","
            decimals={value.includes('.') ? 2 : 0}
          >
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        ) : (
          value
        )}
      </h3>
      <p className="text-gray-600 text-sm">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="w-full py-10 bg-white/90 backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <AnimatedStat 
            key={index}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
