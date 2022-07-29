import "./filters.styles.css";
import { setCurrentNotes, setCurrentNotesAsync } from "../../consts/Consts";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const FavFilter = () => {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const filterByFavs = useCallback(
    (evt) => {
      if (evt.target.value === "none") {
        dispatch({ type: setCurrentNotesAsync });
      } else {
        let filteredNotes = Object.entries(allNotes).filter(([key, value]) => {
          return value.fav === true;
        });
        filteredNotes = filteredNotes.map(([key, value]) => {
          return value;
        });
        dispatch({ type: setCurrentNotes, value: filteredNotes });
      }
    },
    [dispatch, allNotes]
  );

  return (
    <div className="filters">
      <label>Filtr ulubionych:</label>
      <select
        name="favs"
        onChange={filterByFavs}
        defaultValue="none"
        className="filters__select"
      >
        <option value="none">BRAK</option>
        <option value="favs">Ulubione</option>
      </select>
    </div>
  );
};
