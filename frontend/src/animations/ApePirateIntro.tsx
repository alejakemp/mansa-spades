import { motion } from 'framer-motion';
import React from 'react';

const ApePirateIntro = () => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      {/* SVG content for Ape Pirate */}
      <motion.rect width="100" height="100" fill="brown" animate={{ rotate: 360 }} transition={{ duration: 2 }} />
    </motion.svg>
  );
};

export default ApePirateIntro;