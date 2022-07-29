import "./Search.styles.css";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchNotesAsync } from "../../consts/Consts";
import { NoteEditPopup } from "../Popups/NoteEditPopup";

export const Search = () => {
  const searchNotes = useSelector((state) => state.searchNotes);
  const dispatch = useDispatch();
  const searchHandler = useCallback(
    (evt) => {
      dispatch({
        type: setSearchNotesAsync,
        value: evt.target.value,
      });
    },
    [dispatch]
  );

  return (
    <div className="search">
      <div>
        <label className="search__label">Wyszukaj notatki:</label>
        <input type="text" onChange={searchHandler} className="search__input" />
      </div>
      <div>
        {Object.entries(searchNotes).map(([key, value]) => {
          return (
            <div>
              <NoteEditPopup
                title={value.title}
                body={value.body}
                fav={value.fav}
                id={value.id}
                key={value.id}
                name={value.title}
                width="250px"
                height="50px"
                position="relative"
                float="right"
              ></NoteEditPopup>
            </div>
          );
        })}
      </div>
    </div>
  );
};
