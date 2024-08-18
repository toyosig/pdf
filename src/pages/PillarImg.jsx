import React from 'react';
import pillarImage from '../assets/faith.jpg'; // Adjust the path based on your project structure

const PillarImg = () => {
  return (
    <div className="flex justify-center items-center">
      <img 
        src={pillarImage} 
        alt="Pillar" 
      />
    </div>
  );
};

export default PillarImg;
