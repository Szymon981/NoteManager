import React, { useState, useRef } from "react";
import Modal from "react-modal";
import ContentEditable from "react-contenteditable";
import "./Popups.styles.css";
import { useCallback } from "react";
import { customStyles } from "../../consts/Consts";
import { updateNoteBody } from "../../api/ApiConnections";
import { ActionButton } from "../ActionButton/ActionButton";
Modal.setAppElement("body");

export const NoteEditPopup = (props) => {
  const noteCurrentBody = useRef(props.body);
  const noteDefaultBody = useRef(props.body);
  const contentEditable = useRef();
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleNoteChange = useCallback(
    (evt) => {
      noteCurrentBody.current = evt.target.value;
    },
    [noteCurrentBody]
  );

  const saveNoteChange = useCallback(() => {
    if (noteCurrentBody.current !== noteDefaultBody.current) {
      updateNoteBody(props.id, noteCurrentBody.current);
    }
  }, [props.id]);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <ActionButton name="Edytuj" onClickHandler={openModal}></ActionButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Note editing modal"
      >
        <div className="modal">
          <ActionButton
            name="Zamknij"
            position="right"
            onClickHandler={closeModal}
          ></ActionButton>
          <h2 className="modal__edit-title">{props.title}</h2>
          <form>
            <ContentEditable
              innerRef={contentEditable}
              onChange={handleNoteChange}
              html={props.body}
              className="content-editable"
            />
            <ActionButton
              name="Zapisz"
              position="right"
              onClickHandler={saveNoteChange}
            ></ActionButton>
          </form>
        </div>
      </Modal>
    </div>
  );
};
