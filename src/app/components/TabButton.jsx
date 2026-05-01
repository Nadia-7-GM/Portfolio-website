import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="relative px-2">

      <p className={`font-medium transition-colors duration-200 ${
        active ? "text-white" : "text-gray-400"
      }`}>
        {children}
      </p>

      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-[2px] bg-green-400 mt-1 rounded"
      />

    </button>
  );
};

export default TabButton;