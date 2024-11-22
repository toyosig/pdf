import React from "react";

const Pay = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Coming Soon!
      </h1>
      <p className="text-lg md:text-xl text-center mb-8">
        We're working on something amazing. Stay tuned!
      </p>
      <button className="bg-white text-purple-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Learn More
      </button>
      <div className="absolute bottom-4 text-sm text-gray-300">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </div>
  );
};

export default Pay;
