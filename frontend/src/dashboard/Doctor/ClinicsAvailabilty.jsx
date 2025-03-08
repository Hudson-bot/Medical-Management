import React from "react";

const clinics = [
  {
    name: "MedCare Clinic",
    address: "4567 MG Road, New Delhi",
    fee: "₹ 700",
    timing: { mon: "10 AM - 7 PM", sat_sun: "Closed" },
  },
  {
    name: "HealthHaven Medical Center",
    address: "Sector 50, Noida",
    fee: "₹ 1000",
    timing: { mon: "9 AM - 5 PM", sat_sun: "Closed" },
  },
];

const ClinicsAvailability = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Clinics & Availability</h3>
      {clinics.map((clinic, index) => (
        <div key={index} className="border-b last:border-0 pb-3 mb-3">
          <h4 className="font-semibold">{clinic.name}</h4>
          <p className="text-gray-500 text-sm">{clinic.address}</p>
          <p className="text-gray-800 font-bold mt-1">Consultation Fee: {clinic.fee}</p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">MON - FRI:</span> {clinic.timing.mon}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">SAT & SUN:</span> {clinic.timing.sat_sun}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClinicsAvailability;
