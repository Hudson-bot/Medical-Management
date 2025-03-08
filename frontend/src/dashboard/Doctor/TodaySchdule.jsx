import React from "react";

const schedule = [
  { name: "Adrian Marshall", time: "10:00 AM", status: "Upcoming" },
  { name: "Kelly Stevens", time: "11:30 AM", status: "In Progress" },
  { name: "Catherine Griffin", time: "1:00 PM", status: "Cancelled" },
  { name: "Robert Hutchinson", time: "3:30 PM", status: "Upcoming" },
];

const TodaySchedule = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Today's Schedule</h3>
      <ul className="divide-y divide-gray-200">
        {schedule.map((appointment, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <div>
              <p className="font-semibold">{appointment.name}</p>
              <p className="text-gray-500 text-sm">{appointment.time}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              appointment.status === "Upcoming" ? "bg-blue-100 text-blue-700" 
              : appointment.status === "In Progress" ? "bg-green-100 text-green-700" 
              : "bg-red-100 text-red-700"
            }`}>
              {appointment.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodaySchedule;
