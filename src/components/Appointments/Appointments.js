import React, { useEffect, useState } from "react";
import Documents from "../../Documents/Documents";
import "./Appointments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
const Appointments = () => {
  const [appointment, setAppointment] = useState({});
  const [pastAppointment, setPastAppointment] = useState({});
  const [record, setRecord] = useState({});
  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data[0]["Upcoming Appointments"]);
        setPastAppointment(data[0]["Post Appointment"]);
        setRecord(data[0]["Medical Records"]);
        // console.log(data[0]["Upcoming Appointments"]);
      });
  }, []);
  const { Date, Time, Treatment, Dentist, Nurse } = appointment;
  return (
    <div className="appoint_section">
      <div className="tab_container">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Upcomming Appointments
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Past Appointments
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Medical Records
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div className="tab_content_header">
            <p>Root Canal Treatment</p>
            <button className="previous_btn">
              <FontAwesomeIcon icon={faChevronUp} /> Show Previous Treatment
            </button>
          </div>
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="appointment_card">
              <div className="appointment_date">
                <h1>{Date}</h1>
                <p>{Time}</p>
              </div>
              <div className="appointment_type">
                <span>Treatment</span>
                <p>{Treatment}</p>
              </div>
              <div className="appointment_details">
                <div className="appointment_doctor_name">
                  <span>Dentist</span>
                  <p>{Dentist}</p>
                </div>
                <div className="appointment_doctor_name">
                  <span>Nurse</span>
                  <p>{Nurse}</p>
                </div>
                <div className="appointsment_notes">
                  <span>
                    <FontAwesomeIcon icon={faNoteSticky} /> Note
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="appointment_card">
              <div className="appointment_date">
                <h1>{pastAppointment.Date}</h1>
                <p>{pastAppointment.Time}</p>
              </div>
              <div className="appointment_type">
                <span>Treatment</span>
                <p>{pastAppointment.Treatment}</p>
              </div>
              <div className="appointment_details">
                <div className="appointment_doctor_name">
                  <span>Dentist</span>
                  <p>{pastAppointment.Dentist}</p>
                </div>
                <div className="appointment_doctor_name">
                  <span>Nurse</span>
                  <p>{pastAppointment.Nurse}</p>
                </div>
                <div className="appointsment_notes">
                  <span>
                    <FontAwesomeIcon icon={faNoteSticky} /> Note
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="appointment_card">
              <div className="status">
                <span>Status: </span>
                {record.status}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Documents />
    </div>
  );
};

export default Appointments;
