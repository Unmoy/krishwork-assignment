import React, { useEffect, useState } from "react";
import "./Leftpanel.css";
import image from "./images/pic1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faDesktop,
  faList,
  faStar,
  faClipboard,
  faHandsHelping,
  faComments,
  faQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
export const userMenuItems = [
  { iconName: faDesktop, name: "Overview", to: "/" },
  { iconName: faList, name: "Calender", to: "calender" },
  { iconName: faComments, name: "Patient List", to: "patient" },
  { iconName: faClipboard, name: "Messages", to: "message" },
  { iconName: faStar, name: "Payment", to: "payment" },
  { iconName: faHandsHelping, name: "Settings", to: "settings" },
];
const UserDashboard = () => {
  const [inactive, setInactive] = useState(false);
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data[0]);
      });
  }, []);
  const { name, specification } = doctor;
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  return (
    <div className="dashboard_board">
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="brand_name">
            <Link to="/" className="dashboard_route_links">
              <h4>Zen</h4>
            </Link>
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="links">
          <ul>
            {userMenuItems.map((menuItem, index) => (
              <MenuItems
                key={index}
                name={menuItem.name}
                to={menuItem.to}
                iconName={menuItem.iconName}
              />
            ))}
          </ul>
        </div>
        <div className="bottom_buttons">
          <div className="menu-icon">
            <FontAwesomeIcon icon={faQuestion} />
          </div>
          <span>Help</span>
        </div>
        <div className="doctor_info">
          <div className="doctor_image">
            <img src={image} alt="pic" />
          </div>
          <div className="doctor_name">
            <span>{name}</span>
            <p>{specification}</p>
          </div>
          <div className="bottom_expand">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
