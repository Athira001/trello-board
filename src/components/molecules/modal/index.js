import React, { useState } from "react";

import "./style.css";

export const Modal = ({ editNote, handleEditNote, index, name, note }) => {
  const [value, setValue] = useState(note);

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <p>Edit Note</p>
            <span style={{ cursor: "pointer" }} onClick={() => editNote()}>
              X
            </span>
          </div>
          <div className="modal-form">
            <form
              onSubmit={(e) => {
                editNote();
                handleEditNote(e, index, name, value);
              }}
            >
              <textarea
                className="text-field"
                name="Name"
                type="text"
                value={value}
                rows="8"
                onChange={(e) => setValue(e.target.value)}
                required
              />
              <div style={{ textAlign: "center" }}>
                <button className="config-button" type="submit">
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
