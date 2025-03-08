import React from "react";

const appointments = [
  { name: "Adrian Marshall", time: "10:00 AM", status: "Upcoming" },
  { name: "Kelly Stevens", time: "11:30 AM", status: "In Progress" },
  { name: "Catherine Griffin", time: "1:00 PM", status: "Cancelled" },
];

const UpcomingAppointments = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
      {appointments.map((appointment, index) => (
        <div key={index} className="p-2 border-b">
          <p className="font-semibold">{appointment.name}</p>
          <p className="text-gray-500">{appointment.time}</p>
          <span className={`px-2 py-1 text-sm rounded-full ${
            appointment.status === "Upcoming" ? "bg-blue-200" : appointment.status === "In Progress" ? "bg-green-200" : "bg-red-200"
          }`}>
            {appointment.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UpcomingAppointments;
