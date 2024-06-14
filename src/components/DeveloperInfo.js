import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperCard from './DeveloperCard';
import { developers } from '../data/developers';

const DeveloperInfo = () => {
  const [devInfo, setDevInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        developers.map(dev =>
          fetch(`https://api.github.com/users/${dev.username}`)
            .then(response => response.json())
        )
      );
      setDevInfo(data);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center mt-8 w-4/5"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-white mb-2">Meet the Team</h2>
      <hr className="border-t-2 border-gray-600 w-full mb-4" />
      
      <div className="flex flex-col items-center space-y-4 w-full">
        {devInfo.map((dev, index) => (
          <DeveloperCard key={index} dev={dev} />
        ))}
      </div>
    </motion.div>
  );
};

export default DeveloperInfo;