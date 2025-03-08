import React, { useState } from "react";
import Header from "./Header";
import PatientInfo from "./PatientInfo";
import HeartRate from "./HeartRate";
import BloodPressure from "./BloodPressure";
import Haemoglobin from "./Haemoglobin";
import BookAppointment from "./BookAppointment";
import PreviousAppointments from "./PreviousAppointments";
import MedicineStore from "./MedicineStore";

const PatientDashboard = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Sample data
  const patientName = "John Doe";
  const patientInfo = {
    name: "John Doe",
    age: 30,
    height: "180 cm",
    weight: "75 kg",
  };
  const healthStats = {
    hemoglobin: "17.2 g/dl",
    heartRate: "86 b/min",
    bp: "120/85 mmHg",
  };
  const appointments = [
    { date: "2023-10-01", doctor: "Dr. Smith", reason: "Fever" },
    { date: "2023-09-25", doctor: "Dr. Johnson", reason: "Back Pain" },
  ];

  return (
    <div className="min-h-screen bg- p-6 space-y-6 mt-16">
      <Header patientName={patientName} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PatientInfo {...patientInfo} />
        <Haemoglobin value={healthStats.hemoglobin}  />
        <BloodPressure value={healthStats.bp}  />
        <HeartRate value={healthStats.heartRate}  />
        <BookAppointment onBookAppointment={() => setShowDialog(true)} />
        <PreviousAppointments appointments={appointments} />
      </div>
      <MedicineStore />
    </div>
  );
};

export default PatientDashboard;
