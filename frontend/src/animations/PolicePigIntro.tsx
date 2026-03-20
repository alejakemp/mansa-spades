import { motion } from 'framer-motion';
import React from 'react';

const PolicePigIntro = () => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      {/* SVG content for Police Pig */}
      <motion.circle cx="50" cy="50" r="40" fill="pink" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <text x="50" y="55" textAnchor="middle" fontSize="40">👮</text>
    </motion.svg>
  );
};

export default PolicePigIntro;