import React from "react";

const StatsCards = () => {
  const stats = [
    { title: "Today's Appointments", value: 100, change: "↑ 5% from yesterday", color: "text-green-600" },
    { title: "Video Consults", value: 50, change: "↑ 3% from last week", color: "text-blue-600" },
    { title: "Pre-visit Appointments", value: 50, change: "↓ 2% from last week", color: "text-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{stat.title}</h3>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className={`text-sm ${stat.color}`}>{stat.change}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
