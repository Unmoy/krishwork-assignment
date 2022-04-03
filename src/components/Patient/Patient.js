import React, { useEffect, useState } from "react";
import "./Patient.css";
import image from "../images/pic1.png";
import Notes from "./Notes";
const Patient = () => {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((res) => res.json())
      .then((data) => setPatient(data[0]));
  }, []);
  const { name, Past, Upcoming, Gender, Birthday } = patient;
  return (
    <section className="hero_section">
      <div className="patient_container_left">
        <div className="patient_card">
          <div className="image">
            <img src={image} alt="pic" />
          </div>
          <div className="title">
            <h2>{name}</h2>
            <h5>dianecooper.example.com</h5>
          </div>
          <div className="info">
            <div className="info_box right_border">
              <h3>{Past}</h3>
              <h5>Past</h5>
            </div>
            <div className="info_box">
              <h3>{Upcoming}</h3>
              <h5>Upcomming</h5>
            </div>
          </div>
          <div className="message_btn">Send Messsage</div>
        </div>
        <div className="patient_info">
          <ul>
            <li>
              Gender
              <p>{Gender}</p>
            </li>
            <li>
              BirthDay
              <p>{Birthday}</p>
            </li>
            <li>
              Phone Number
              <p>111111</p>
            </li>
            <li>
              Street Address
              <p>JI. Diponegoro No. 21</p>
            </li>
            <li>
              City
              <p>Newyork</p>
            </li>
            <li>
              ZIp Code
              <p>655849</p>
            </li>
            <li>
              Member Status
              <p>Active Member</p>
            </li>
            <li>
              Registered Date
              <p>Feb 24th, 1997</p>
            </li>
          </ul>
        </div>
      </div>
      <Notes />
    </section>
  );
};

export default Patient;
