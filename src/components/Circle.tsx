import React from "react";
import { motion } from "framer-motion";
import { draw } from "../App";

const Circle = () => {
  return (
    <motion.svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      initial="hidden"
      animate="visible"
    >
      <motion.circle r="75" cx="80" cy="80" stroke="#ff0055" variants={draw} />
    </motion.svg>
  );
};

export default Circle;
