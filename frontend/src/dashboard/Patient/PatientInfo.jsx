import React from "react";

const PatientInfo = ({ name, age, height, weight }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold ">Patient's Information</h2>
      <br/>
      <p className="text-xl font-medium"><strong>Name:</strong> {name}</p>
      <br/>
      <p className="text-xl font-medium"><strong>Age:</strong> {age}</p>
      <br/>
      <p className="text-xl font-medium"><strong>Height:</strong> {height}</p>
      <br/>
      <p className="text-xl font-medium"><strong>Weight:</strong> {weight}</p>
      <br/>
      <button className="mt-2 px-4 py-2 bg-indigo-900 hover:opacity-75 text-white rounded-md ">
        Edit
      </button>
    </div>
  );
};

export default PatientInfo;
