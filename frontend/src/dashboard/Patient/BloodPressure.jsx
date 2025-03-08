import React from "react";

const BloodPressure = ({ value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4 border border-gray-200">
      <h3 className="bg-indigo-600 text-white px-4 py-2 rounded-md text-lg font-semibold">Blood pressure</h3>
      <p className="text-center text-xl mt-2">{value}</p>
      <img src="/images/bp.png" alt="BloodPressure" className="w-40 h-40 items-center object-contain" />
    </div>
  );
};

export default BloodPressure;
