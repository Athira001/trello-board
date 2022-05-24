import React, { useState } from "react";

import { Modal } from "../modal";

import "./style.css";

export const ProjectNote = ({
  note,
  removeNote,
  index,
  cardId,
  moveProjectNoteTo,
  name,
  cardList,
  handleEditNote,
}) => {
  const [projectNote, showProjectNote] = useState(false);
  const [modal, showModal] = useState(false);

  const editNote = () => {
    showModal(!modal);
  };

  return (
    <div className="project-card-container" id={`project-card-${index}`}>
      <div className="header">
        <div>{note}</div>{" "}
        <span onClick={() => editNote()} className="edit-icon">
          &#9998;
        </span>
      </div>

      <div className="btm-wrapper">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => removeNote(index, name)}
        >
          &#128465;
        </div>
        {Object.keys(cardList).length > 1 && (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => showProjectNote(!projectNote)}
          >
            Move Note To :{" "}
          </div>
        )}
      </div>
      {projectNote && (
        <ul className="list">
          {Object.keys(cardList).map((item, i) => {
            return (
              cardId !== i && (
                <li
                  onClick={(e) => moveProjectNoteTo(e, item, name, index, note)}
                >
                  {item}
                </li>
              )
            );
          })}
        </ul>
      )}
      {modal && (
        <Modal
          editNote={editNote}
          handleEditNote={handleEditNote}
          index={index}
          name={name}
          note={note}
        />
      )}
    </div>
  );
};
