import React from 'react';
import { motion } from 'framer-motion';
import logo from '../ele_logo.png';
import DeveloperInfo from './DeveloperInfo';

export default function Title() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center h-full px-8 py-4 "
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={logo} alt="ELEDev Logo" className="w-96 h-96 mb-4" />
      <DeveloperInfo />
    </motion.div>
  );
}
