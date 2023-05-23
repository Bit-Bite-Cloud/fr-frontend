import React from 'react';

const Details = ({ pictureSrc, name }) => {
  return (
    <div className="flex bg-white rounded-md shadow-md">
      <div className="flex-shrink-0">
        <img src={pictureSrc} alt="Profile Picture" className="w-48 h-48 object-cover rounded-l-md" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
};

export default Details;
