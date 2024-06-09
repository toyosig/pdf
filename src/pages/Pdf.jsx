import React from 'react';

const Pdf = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full h-full max-w-screen-lg">
        <iframe
          src="/POWER.pdf#toolbar=0"
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>

      </div>
    </div>
  );
};

export default Pdf;
