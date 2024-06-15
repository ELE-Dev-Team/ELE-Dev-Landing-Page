import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const websites = [
  { 
    name: 'Mideast Metrics', 
    url: 'https://mideastmetrics.eledev.org', 
    description: 'A comprehensive metrics platform for Middle East data.' 
  },
];

export default function Main() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % websites.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + websites.length) % websites.length);
  };

  return (
    <motion.main
      className="flex items-center w-full text-white py-16 overflow-hidden"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-2 text-center w-full">Our Projects</h2>
        <hr className="border-t-2 border-gray-600 w-3/4 mb-8 self-center" />
        {/* <button
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 mx-2"
            onClick={prevSlide}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 mx-2"
            onClick={nextSlide}
          >
            <FaChevronRight size={24} />
          </button> */}
        <div className="w-full max-w-4xl flex justify-center items-center overflow-hidden relative">
          <Carousel current={current} />
        </div>
      </div>
    </motion.main>
  );
}
