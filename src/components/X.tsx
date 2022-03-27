import React from "react";
import { motion } from "framer-motion";

const X = () => {
  return (
    <motion.svg width="160" height="160" viewBox="0 0 160 160">
      <motion.line x1="5" y1="5" x2="155" y2="155" stroke="#00cc88" />
      <motion.line x1="5" y1="155" x2="155" y2="5" stroke="#00cc88" />
    </motion.svg>
  );
};

export default X;
