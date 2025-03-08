import React from "react";

const Header = ({ patientName }) => {
  return (
    <h1 className="text-2xl font-semibold">Good Morning, {patientName}</h1>
  );
};

export default Header;
