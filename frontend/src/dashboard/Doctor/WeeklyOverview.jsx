import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", appointments: 10 },
  { day: "Tue", appointments: 25 },
  { day: "Wed", appointments: 30 },
  { day: "Thu", appointments: 20 },
  { day: "Fri", appointments: 35 },
];

const WeeklyOverview = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Weekly Overview</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="appointments" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyOverview;
