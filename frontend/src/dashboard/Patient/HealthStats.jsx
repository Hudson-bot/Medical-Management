import React from "react";
import { FaHeartbeat, FaTint, FaHeart } from "react-icons/fa"; // Icons for heartbeat, hemoglobin, and BP

const HealthStats = ({ hemoglobin, heartRate, bp }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Health Statistics</h3>
      <div className="space-y-4">
        {/* Hemoglobin */}
        <div className="flex items-center space-x-4">
          <div className="text-blue-600">
            <FaTint size={24} /> {/* Icon for Hemoglobin */}
          </div>
          <div>
            <label className="text-gray-600">Hemoglobin:</label>
            <p className="font-medium">{hemoglobin} g/dl</p>
          </div>
        </div>

        {/* Heart Rate */}
        <div className="flex items-center space-x-4">
          <div className="text-red-600">
            <FaHeartbeat size={24} /> {/* Icon for Heart Rate */}
          </div>
          <div>
            <label className="text-gray-600">Heart Rate:</label>
            <p className="font-medium">{heartRate} b/min</p>
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="flex items-center space-x-4">
          <div className="text-green-600">
            <FaHeart size={24} /> {/* Icon for Blood Pressure */}
          </div>
          <div>
            <label className="text-gray-600">BP:</label>
            <p className="font-medium">{bp} mmHg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthStats;