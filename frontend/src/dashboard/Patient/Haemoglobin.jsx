import React from "react";

const Haemoglobin = ({ value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4 border border-gray-200">
      <h3 className="bg-indigo-600 text-white px-4 py-2 rounded-md text-lg font-semibold">Haemoglobin</h3>
      
      <p className="text-center text-2xl font-medium text-gray-700">{value} </p>
      <img src="/images/haemoglobin.jpg" alt="Haemoglobin" className="w-40 h-40 object-contain" />
    </div>
  );
};

export default Haemoglobin;
