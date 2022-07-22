import "./Board.styles.css";
import { useState, useEffect, useCallback } from "react";
import { setNotes } from "../../api/ApiConnections";
import { Note } from "../Note/Note";
import { NoteAddPopup } from "../Popups/NoteAddPopup";
import { BreakingLine } from "../BreakingLine/BreakingLine";

export const Board = () => {
  const [currentNotes, setCurrentNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const _ = require("lodash");

  useEffect(() => {
    setNotes(setAllNotes);
    setNotes(setCurrentNotes);
  }, []);

  const filterTags = _.uniq(
    Object.entries(allNotes).map(([key, value]) => {
      return value.tags;
    })
  );

  const notesSetter = useCallback((notes) => {
    setCurrentNotes(notes);
    setAllNotes(notes);
  }, []);

  const filterByTags = useCallback(
    (evt) => {
      if (evt.target.value === "no-filters") {
        setNotes(setCurrentNotes);
      } else {
        let filteredNotes = Object.entries(allNotes).filter(([key, value]) => {
          return value.tags === evt.target.value;
        });
        filteredNotes = filteredNotes.map(([key, value]) => {
          return value;
        });
        setCurrentNotes(filteredNotes);
      }
    },
    [allNotes]
  );

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
          <div className="board__tags-filter">
            <label>Filtruj po tagach:</label>
            <select
              name="tags"
              onChange={filterByTags}
              defaultValue="no-filters"
            >
              <option value="no-filters">BRAK</option>
              {filterTags.map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="notes-container">
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
    </div>
  );
};
