import "./Board.styles.css";
import { setNotesAsync, setCurrentNotesAsync } from "../../consts/Consts";
import { useEffect } from "react";
import { Note } from "../Note/Note";
import { NoteAddPopup } from "../Popups/NoteAddPopup";
import { BreakingLine } from "../BreakingLine/BreakingLine";
import { useDispatch, useSelector } from "react-redux";
import { TagFilter } from "../filters/TagFilter";
import { FavFilter } from "../filters/FavFilter";

export const Board = () => {
  const currentNotes = useSelector((state) => state.currentNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: setNotesAsync });
    dispatch({ type: setCurrentNotesAsync });
  }, [dispatch]);

  return (
    <div>
      <div className="board">
        <div>
          <h3 className="board__note-add-header">
            Kliknij by dodać nową notatkę:
          </h3>
          <NoteAddPopup></NoteAddPopup>
        </div>
        <div>
          <BreakingLine></BreakingLine>
          <h2 className="board__notes-title">Tablica notatek:</h2>
          <TagFilter></TagFilter>
          <FavFilter></FavFilter>
          <div className="board__notes-container">
            {Object.entries(currentNotes).map(([key, value]) => {
              return (
                <Note
                  tags={value.tags}
                  fav={value.fav}
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
