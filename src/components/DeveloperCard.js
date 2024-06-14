import React from 'react';

const DeveloperCard = ({ dev }) => {
  return (
    <a 
      href={dev.html_url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-gray-800 text-white rounded-full py-2 px-4 w-full text-center flex items-center hover:bg-gray-700"
    >
      <img 
        src={dev.avatar_url} 
        alt={`${dev.login}'s avatar`} 
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <div className="font-bold">{dev.login}</div>
        <div className="text-sm">Software Developer</div>
      </div>
    </a>
  );
};

export default DeveloperCard;