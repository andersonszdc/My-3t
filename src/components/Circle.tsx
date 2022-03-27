import React from "react";
import { motion } from "framer-motion";

const Circle = () => {
  return (
    <motion.svg width="160" height="160" viewBox="0 0 160 160">
      <motion.circle r="75" cx="80" cy="80" stroke="#ff0055" />
    </motion.svg>
  );
};

export default Circle;
