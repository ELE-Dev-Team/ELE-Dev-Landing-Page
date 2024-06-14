import React from 'react';

const WebsiteCard = ({ website }) => {
  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex-shrink-0 p-4 flex flex-col items-center transform transition-transform duration-300"
    >
      <div className="max-w-md bg-gray-800 rounded-lg shadow-lg p-6 text-white hover:bg-gray-700 relative">
        <h3 className="text-2xl font-bold mb-2">{website.name}</h3>
        <p className="mb-4">{website.description}</p>
        <div className="mt-4 w-full relative">
        <iframe src={website.url} title={website.title} className="w-full h-96" />
        <div className="absolute inset-0 bg-transparent z-10 pointer-events-none"></div>
      </div>
      </div>
    </a>
  );
};

export default WebsiteCard;