import React, { useState } from "react";

import { Button } from "../../atoms/button";
import { InputField } from "../../atoms/text-field";
import { Card } from "../../molecules/card";

import "./style.css";

export const Board = () => {
  const [card, setCard] = useState({});
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
    const updateCard = { ...card, ...{ [value]: [] } };
    setCard(updateCard);
    setValue("");
  };

  const removeCard = (index) => {
    setCard(({ [index]: value, ...card }) => card);
  };

  const addProjectNoteToCard = (e, value, cardName) => {
    e.preventDefault();
    if (!value) return;
    const updateCard = { ...card, ...card[cardName].push(value) };
    setCard(updateCard);
  };

  const removeNote = (index, name) => {
    const updateCard = { ...card };
    updateCard[name].splice(index, 1);
    setCard(updateCard);
  };

  const moveProjectNoteTo = (
    e,
    destinationCardName,
    currentCardName,
    index,
    note
  ) => {
    removeNote(index, currentCardName);
    addProjectNoteToCard(e, note, destinationCardName);
  };

  const handleEditNote = (e, index, cardName, value) => {
    e.preventDefault();
    if (!value) return;
    const updateCard = { ...card };
    updateCard[cardName].splice(index, index + 1, value);
    setCard(updateCard);
  };


  return (
    <div className="board-container">
      <form className="add-new-column" onSubmit={handleSubmit}>
        <InputField
          type="text"
          onChange={(e) => setValue(e.target.value)}
          name="card"
          value={value}
          id="card"
          placeholder="Column name"
        />
        <Button text={"Add column"} type="submit" />
      </form>
      <div className="card-wrapper">
        {Object.keys(card).map((name, index) => {
          return (
            <Card
              name={name}
              removeNote={removeNote}
              projectNotes={card[name]}
              removeCard={removeCard}
              cardId={index}
              addProjectNoteToCard={addProjectNoteToCard}
              cardList={card}
              moveProjectNoteTo={moveProjectNoteTo}
              handleEditNote={handleEditNote}
            />
          );
        })}
      </div>
    </div>
  );
};
