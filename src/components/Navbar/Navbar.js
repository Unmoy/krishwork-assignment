import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="top_nav">
      <div className="user_title">
        <FontAwesomeIcon icon={faUser} className="user_title_icon" />
        <span>Zendeta</span>
      </div>
      <div className="user_cta">
        <input type="text" className="nav_input" placeholder="search" />
        <button className="nav_add_btn">
          <FontAwesomeIcon icon={faPlus} className="" />
        </button>
        <button className="nav_bell_btn">
          <FontAwesomeIcon icon={faBell} className="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
