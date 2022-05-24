import React, { useState } from "react";

import { TextAreaField } from "../../atoms/text-area";
import { ProjectNote } from "../project-note";

import "./style.css";

export const Card = ({
  name,
  removeCard,
  cardId,
  projectNotes = [],
  addProjectNoteToCard,
  removeNote,
  cardList,
  moveProjectNoteTo,
  handleEditNote,
}) => {
  const [value, setValue] = useState("");
  const [projectNote, showProjectNote] = useState(false);

  const showProjectNotePanel = () => {
    showProjectNote(!projectNote);
  };

  return (
    <div className="card-container">
      <div className="card-config">
        <h4>{name}</h4>
        <div className="btn-wrapper">
          <button className="add-card" onClick={() => showProjectNotePanel()}>
            +
          </button>
          <button className="delete-card" onClick={() => removeCard(name)}>
            ✕
          </button>
        </div>
      </div>

      {projectNote && (
        <div>
          <form
            onSubmit={(e) => {
              addProjectNoteToCard(e, value, name);
              setValue("");
            }}
          >
            <TextAreaField
              name="project-note"
              rows={"2"}
              onChange={(e) => setValue(e.target.value)}
              id="project-note"
              placeholder="Enter a note"
            />
            <div className="config-button-wrapper">
              <button className="config-button" type="submit">
                Add
              </button>
              <button
                className="config-button"
                onClick={() => showProjectNote(!projectNote)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {projectNotes.map((item, index) => {
        return (
          <ProjectNote
            name={name}
            note={item}
            removeNote={removeNote}
            index={index}
            cardId={cardId}
            moveProjectNoteTo={moveProjectNoteTo}
            cardList={cardList}
            handleEditNote={handleEditNote}
          />
        );
      })}
    </div>
  );
};
