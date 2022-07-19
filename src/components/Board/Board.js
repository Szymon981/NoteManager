import "./Board.styles.css";
import { useState, useEffect, useCallback } from "react";
import { setNotes } from "../../api/ApiConnections";
import { Note } from "../Note/Note";
import { NoteAddPopup } from "../Popups/NoteAddPopup";
import { BreakingLine } from "../BreakingLine/BreakingLine";

export const Board = () => {
  const [currentNotes, setCurrentNotes] = useState("");
  const [allNotes, setAllNotes] = useState("");
  // const allNotes = useRef("");
  useEffect(() => {
    setNotes(setAllNotes);
    setNotes(setCurrentNotes);
    // allNotes = currentNotes;
  }, []);

  // console.log(allNotes);

  const notesSetter = useCallback((notes) => {
    setCurrentNotes(notes);
  }, []);

  const filterByTags = (evt) => {
    if (evt.target.value === "no-filters") {
      setNotes(setCurrentNotes);
    } else {
      Object.entries(allNotes).filter(([key, value]) => {
        // console.log(Object.entries(allNotes));
        // console.log(value.tags + " wyszlo z listy tagow");
        // console.log(evt.target.value + " wyszlo z selecta");
        // return allNotes[key].tags ===
        // console.log(value.splice(1, 1));
        return Object.entries(value)["tags"] === evt.target.value;
      });
    }
  };

  return (
    <div>
      <div className="board">
        <div>
          <h3 className="board__note-add-header">
            Kliknij by dodać nową notatkę:
          </h3>
          <NoteAddPopup notesSetterProps={notesSetter}></NoteAddPopup>
        </div>
        <div>
          <BreakingLine></BreakingLine>
          <h2 className="board__notes-title">Tablica notatek:</h2>
          <div>
            <label>Filtruj po tagach:</label>
            <select name="tags" onChange={filterByTags}>
              <option value="no-filters" selected>
                BRAK
              </option>
              {Object.entries(allNotes).map(([key, value]) => {
                return (
                  <option value={value.tags} key={value.id}>
                    {value.tags}
                  </option>
                );
              })}
            </select>
          </div>
          <BreakingLine></BreakingLine>
          {Object.entries(currentNotes).map(([key, value]) => {
            return (
              <Note
                notesSetterProps={notesSetter}
                tags={value.tags}
                // fav={value[1].fav}
                body={value.body}
                title={value.title}
                id={value.id}
                key={value.id}
              ></Note>
            );
          })}
        </div>
      </div>
    </div>
  );
};
