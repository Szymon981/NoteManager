import "./Popups.styles.css";
import React from "react";

export const NoteAddInput = ({ value, handleChange }) => {
  const changer = (evt) => {
    handleChange(evt.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={changer} />
    </div>
  );
};
