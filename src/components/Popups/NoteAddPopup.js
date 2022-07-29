import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles, saveNewNote } from "../../consts/Consts";
import "./Popups.styles.css";
import { useCallback } from "react";
import { NoteAddInput } from "./NoteAddInput";
import { NoteAddTextarea } from "./NoteAddTextarea";
import { ActionButton } from "../ActionButton/ActionButton";
import { DataInsert } from "./DataInsert";
import { useDispatch } from "react-redux";
import { FavCheckbox } from "../FavCheckbox/FavCheckbox";
Modal.setAppElement("body");

const InputComponent = DataInsert(NoteAddInput);
const TextAreaComponent = DataInsert(NoteAddTextarea);

export const NoteAddPopup = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [noteTag, setNoteTag] = useState("");
  const [noteFav, setNoteFav] = useState(false);

  const dispatch = useDispatch();

  const handleFavChange = useCallback((evt) => {
    setNoteFav(evt.target.checked);
  }, []);

  const resetPopupFields = useCallback(() => {
    setNoteTitle("");
    setNoteBody("");
    setNoteTag("");
    setNoteFav(false);
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    resetPopupFields();
  }, [resetPopupFields]);

  const handleSave = useCallback(() => {
    if (noteTitle && noteBody && noteTag) {
      dispatch({
        type: saveNewNote,
        noteTitle: noteTitle,
        noteBody: noteBody,
        noteTags: noteTag,
        fav: noteFav,
      });
      closeModal();
      resetPopupFields();
    } else {
      alert("Uzupełnij wszystkie pola");
    }
  }, [
    closeModal,
    noteTitle,
    noteBody,
    noteTag,
    noteFav,
    resetPopupFields,
    dispatch,
  ]);

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
              float="right"
              onClickHandler={closeModal}
            ></ActionButton>
          </div>
          <form className="modal__form">
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
            <FavCheckbox
              isFav={false}
              handleChange={handleFavChange}
            ></FavCheckbox>
          </form>
          <ActionButton
            name="Zapisz"
            float="right"
            onClickHandler={handleSave}
          ></ActionButton>
        </div>
      </Modal>
    </div>
  );
};
