import "./Note.styles.css";
import { deleteNote } from "../../consts/Consts";
import { useCallback } from "react";
import { NoteEditPopup } from "../Popups/NoteEditPopup";
import { ActionButton } from "../ActionButton/ActionButton";
import { useDispatch } from "react-redux";

export const Note = ({ title, body, id, fav }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    if (window.confirm("Czy napewno chcesz usunąć notatkę: " + title + "?")) {
      dispatch({ type: deleteNote, id: id });
    }
  }, [id, title, dispatch]);

  return (
    <div className="note" key={id}>
      <p className="note__title">{title}</p>
      <NoteEditPopup
        title={title}
        body={body}
        fav={fav}
        id={id}
      ></NoteEditPopup>
      <ActionButton
        name="Usuń"
        color={"palevioletred"}
        onClickHandler={handleDelete}
      ></ActionButton>
    </div>
  );
};
