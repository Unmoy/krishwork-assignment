import React, { useEffect, useState } from "react";
import "./Document.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const Documents = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/Files")
      .then((res) => res.json())
      .then((data) => setFiles(data[0].files));
  });
  return (
    <div className="document_container">
      <div className="document_header">
        <h6>Files/Documents</h6>
        <p>Add Files</p>
      </div>
      <div className="files_content">
        <ul>
          {files.map((index, file) => {
            return (
              <li key={index}>
                <span>
                  <FontAwesomeIcon icon={faClipboard} className='file_icon'/>
                  {file}
                </span>
                <span>123kb</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Documents;
