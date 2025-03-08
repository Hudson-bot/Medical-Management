import React from "react";
import StatsCards from "./StatsCards";
import Calendar from "./Calender";
import UpcomingAppointments from "./UpcomingAppointments";
import WeeklyOverview from "./WeeklyOverview";
import RecentInvoices from "./RecentInvoices";
import TodaySchedule from "./TodaySchdule";
import ClinicsAvailability from "./ClinicsAvailabilty";


const Dashboard = () => {
    //Get the date
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", {weekday: "long" });
    const monthName = today.toLocaleDateString("en-US", {month: "long" });
    const date = today.getDate();
    const year = today.getFullYear();

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16 ">
      {/* Header */}
      <div className="bg-white shadow-md p-4 rounded-lg flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Hello, Dr. Wasna Waheed</h2>
        <p className="text-gray-500">
          {dayName}, {date} {monthName} {year}
        </p>
      </div>

      {/* Stats and Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <StatsCards />
        <Calendar />
        <UpcomingAppointments />
      </div>

      {/* Charts and Invoices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <WeeklyOverview />
        <RecentInvoices />
      </div>

      {/* Schedule and Clinics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <TodaySchedule />
        <ClinicsAvailability />
      </div>
    </div>
  );
};

export default Dashboard;
