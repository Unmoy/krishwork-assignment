import React from "react";
import Appointments from "./Appointments/Appointments";
import InfoBar from "./InfoBar/InfoBar";
import Navbar from "./Navbar/Navbar";
import "./Overview.css";
import Patient from "./Patient/Patient";
const Overview = () => {
  return (
    <div>
      <Navbar />
      <InfoBar />
      <Patient />
      <Appointments />
    </div>
  );
};

export default Overview;
