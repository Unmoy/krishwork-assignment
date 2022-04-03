import React from "react";
import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Notes = () => {
  return (
    <div className="notes_container">
      <div className="notes_header">
        <h6>Notes</h6>
        <p>See all</p>
      </div>
      <div className="notes_content">
        <ul>
          <li>This is a dummy text</li>
          <li>This is a dummy text</li>
          <li>This is a dummy text</li>
        </ul>
        <div className="sava_note_btn">
          <button>Save Note</button>
        </div>
      </div>
      <div className="notes_footer">
        <h5>Lorem ipsum dolor sit.</h5>
        <div className="notes_provider">
          <p>
            <FontAwesomeIcon icon={faUser} className="notes_provider_icon" />
            Drg.Adam H.
          </p>
          <h6>20 Nov'19</h6>
        </div>
      </div>
    </div>
  );
};

export default Notes;
