import "./Popups.styles.css";
import React from "react";

export const NoteAddInput = (props) => {
  const changer = (evt) => {
    props.handleChange(evt.target.value);
  };
  return (
    <div>
      <input type="text" value={props.value} onChange={changer} />
    </div>
  );
};
