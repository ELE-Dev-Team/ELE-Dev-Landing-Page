import React from 'react';
import WebsiteCard from './WebsiteCard';
import { websites } from '../data/websites';

const Carousel = ({ current }) => {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center h-full">
      <div className="flex transition-transform duration-500 overflow-hidden" style={{ transform: `translateX(-${current * 100}%)` }}>
        {websites.map((website, index) => (
          <WebsiteCard key={index} website={website} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;