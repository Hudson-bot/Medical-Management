import React from "react";

const PreviousAppointments = ({ appointments }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">Previous Appointments</h3>
      {appointments.length === 0 ? (
        <p>No previous appointments</p>
      ) : (
        <ul className="mt-2">
          {appointments.map((appt, index) => (
            <li key={index} className="border-b py-2">
              {appt.date} - {appt.doctor} ({appt.reason})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PreviousAppointments;
