import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { customStyles, updateNote } from "../../consts/Consts";
import ContentEditable from "react-contenteditable";
import "./Popups.styles.css";
import { useCallback } from "react";
import { ActionButton } from "../ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import { FavCheckbox } from "../FavCheckbox/FavCheckbox";
Modal.setAppElement("body");

export const NoteEditPopup = ({
  title,
  body,
  fav,
  id,
  key,
  width,
  height,
  name,
  position,
  float,
}) => {
  const noteCurrentBody = useRef(body);
  const noteFav = useRef(fav);
  const contentEditable = useRef();
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleNoteBodyChange = useCallback(
    (evt) => {
      noteCurrentBody.current = evt.target.value;
    },
    [noteCurrentBody]
  );

  const handleNoteFavChange = useCallback((evt) => {
    noteFav.current = evt.target.checked;
  }, []);

  const saveNoteChange = useCallback(() => {
    dispatch({
      type: updateNote,
      id: id,
      body: noteCurrentBody.current,
      fav: noteFav.current,
    });
  }, [id, dispatch]);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <ActionButton
        name={name ? name : "Edytuj"}
        width={width}
        height={height}
        onClickHandler={openModal}
        position={position}
        float={float}
        key={key}
      ></ActionButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Note editing modal"
      >
        <div className="modal">
          <ActionButton
            name="Zamknij"
            float="right"
            onClickHandler={closeModal}
          ></ActionButton>
          <h2 className="modal__edit-title">{title}</h2>
          <form className="modal__form">
            <ContentEditable
              innerRef={contentEditable}
              onChange={handleNoteBodyChange}
              html={body}
              className="content-editable"
            />
            <FavCheckbox
              isFav={fav}
              handleChange={handleNoteFavChange}
            ></FavCheckbox>
            <ActionButton
              name="Zapisz"
              float="right"
              onClickHandler={saveNoteChange}
            ></ActionButton>
          </form>
        </div>
      </Modal>
    </div>
  );
};
