import React from "react";

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth(); // 0-based index (0 = Jan, 11 = Dec)
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  // Get the first day of the month (0 = Sunday, 6 = Saturday)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Get total days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Day labels
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-center">Calendar</h3>
      <p className="text-gray-500 text-center">
        {today.toLocaleString("default", { month: "long" })} {currentYear}
      </p>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2 mt-4 font-semibold text-center">
        {dayLabels.map((day) => (
          <div key={day} className="text-gray-700">{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 mt-2">
        {/* Empty cells before the first day of the month */}
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}

        {/* Days of the month */}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const isToday = day === currentDay;

          return (
            <div
              key={day}
              className={`text-center p-2 rounded-lg cursor-pointer transition ${
                isToday ? "bg-blue-600 text-white font-bold" : "hover:bg-blue-100"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

