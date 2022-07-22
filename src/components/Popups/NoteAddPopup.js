import React, { useState } from "react";
import Modal from "react-modal";
import "./Popups.styles.css";
import { useCallback } from "react";
import { customStyles } from "../../consts/Consts";
import { saveNewNote } from "../../api/ApiConnections";
import { NoteAddInput } from "./NoteAddInput";
import { NoteAddTextarea } from "./NoteAddTextarea";
import { ActionButton } from "../ActionButton/ActionButton";
import { DataInsert } from "./DataInsert";
Modal.setAppElement("body");

const InputComponent = DataInsert(NoteAddInput);
const TextAreaComponent = DataInsert(NoteAddTextarea);

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
          <div>
            <ActionButton
              name="Zamknij"
              position="right"
              onClickHandler={closeModal}
            ></ActionButton>
          </div>
          <form>
            <h2 className="modal__header">Tworzenie nowej notatki</h2>
            <InputComponent
              title="Podaj tytuł notatki"
              value={noteTitle}
              handleChange={setNoteTitle}
            />
            <TextAreaComponent
              title="Podaj treść notatki"
              value={noteBody}
              handleChange={setNoteBody}
            />
            <InputComponent
              title="Podaj tag notatki"
              value={noteTag}
              handleChange={setNoteTag}
            />
          </form>
          <ActionButton
            name="Zapisz"
            position="right"
            onClickHandler={handleSave}
          ></ActionButton>
        </div>
      </Modal>
    </div>
  );
};
