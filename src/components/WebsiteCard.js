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
          <iframe
            src={website.url}
            className="w-full h-96 border-2 border-gray-300 rounded-lg"
            title={website.name}
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </a>
  );
};

export default WebsiteCard;