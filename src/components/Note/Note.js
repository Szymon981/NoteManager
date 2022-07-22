import "./Note.styles.css";
import { useCallback } from "react";
import { deleteNote } from "../../api/ApiConnections";
import { NoteEditPopup } from "../Popups/NoteEditPopup";
import { ActionButton } from "../ActionButton/ActionButton";

export const Note = (props) => {
  const notesSetter = useCallback(
    (notes) => {
      props.notesSetterProps(notes);
    },
    [props]
  );

  const handleDelete = useCallback(() => {
    if (
      window.confirm("Czy napewno chcesz usunąć notatkę: " + props.title + "?")
    ) {
      deleteNote(props.id, notesSetter);
    }
  }, [props.id, props.title, notesSetter]);

  return (
    <div className="note" key={props.id}>
      <p className="note__title">{props.title}</p>
      <NoteEditPopup {...props}></NoteEditPopup>
      <ActionButton
        name="Usuń"
        color={"palevioletred"}
        onClickHandler={handleDelete}
      ></ActionButton>
    </div>
  );
};
