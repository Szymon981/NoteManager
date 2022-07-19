import React, { useState } from "react";
import Modal from "react-modal";
import "./Popups.styles.css";
import { useCallback } from "react";
import { customStyles } from "../../consts/Consts";
import { saveNewNote } from "../../api/ApiConnections";
import { NoteAddInput } from "./NoteAddInput";
import { NoteAddTextarea } from "./NoteAddTextarea";
import { ActionButton } from "../ActionButton/ActionButton";
Modal.setAppElement("body");

export const NoteAddPopup = (props) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [noteTag, setNoteTag] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const noteTitleChange = useCallback((evt) => {
    setNoteTitle(evt.target.value);
  }, []);

  const noteBodyChange = useCallback((evt) => {
    setNoteBody(evt.target.value);
  }, []);

  const noteTagChange = useCallback((evt) => {
    setNoteTag(evt.target.value);
  }, []);

  const notesSetter = useCallback(
    (updatedNotes) => {
      props.notesSetterProps(updatedNotes);
    },
    [props]
  );

  const resetPopupFields = useCallback(() => {
    setNoteTitle("");
    setNoteBody("");
    setNoteTag("");
  }, []);

  const handleSave = useCallback(() => {
    if (noteTitle && noteBody && noteTag) {
      saveNewNote(noteTitle, noteBody, noteTag, notesSetter);
      closeModal();
      resetPopupFields();
    } else {
      alert("Uzupełnij wszystkie pola");
    }
  }, [closeModal, noteTitle, noteBody, noteTag, resetPopupFields, notesSetter]);

  return (
    <div>
      <ActionButton name="Dodaj" onClickHandler={openModal}></ActionButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Note adding modal"
      >
        <div className="modal">
          <div className="action-button-div">
            <ActionButton
              name="Zamknij"
              onClickHandler={closeModal}
            ></ActionButton>
          </div>
          <form>
            <h2 className="modal__header">Tworzenie nowej notatki</h2>
            <NoteAddInput
              title="Podaj tytuł notatki:"
              value={noteTitle}
              handleChange={noteTitleChange}
            ></NoteAddInput>
            <NoteAddTextarea
              title="Podaj treść notatki:"
              value={noteBody}
              handleChange={noteBodyChange}
            ></NoteAddTextarea>
            <NoteAddInput
              title="Podaj tag notatki:"
              value={noteTag}
              handleChange={noteTagChange}
            ></NoteAddInput>
          </form>
          <ActionButton
            name="Zapisz"
            onClickHandler={handleSave}
          ></ActionButton>
        </div>
      </Modal>
    </div>
  );
};
