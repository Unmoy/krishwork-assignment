import React from "react";
import "./InfoBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEdit,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
const InfoBar = () => {
  return (
    <div className="info_bar">
      <div className="stepper">
        <span className="info_head">Patient List</span>
        <FontAwesomeIcon icon={faChevronRight} className="chevron_icon" />
        <span className="info_title">Diane Cooper</span>
      </div>
      <div>
        <button className="print_btn">
          <FontAwesomeIcon icon={faPrint} />
        </button>
        <button className="edit_btn">
          <FontAwesomeIcon icon={faEdit} className="edit_icon" />
          Edit Patient
        </button>
      </div>
    </div>
  );
};

export default InfoBar;
