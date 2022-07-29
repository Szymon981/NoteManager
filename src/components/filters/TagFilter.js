import "./filters.styles.css";
import { setCurrentNotes, setCurrentNotesAsync } from "../../consts/Consts";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import _ from "lodash";

export const TagFilter = () => {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const filterTags = _.uniq(
    Object.entries(allNotes).map(([key, value]) => {
      return value.tags;
    })
  );

  const filterByTags = useCallback(
    (evt) => {
      if (evt.target.value === "none") {
        dispatch({ type: setCurrentNotesAsync });
      } else {
        let filteredNotes = Object.entries(allNotes).filter(([key, value]) => {
          return value.tags === evt.target.value;
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
      <label>Filtr tagów:</label>
      <select
        name="tags"
        onChange={filterByTags}
        defaultValue="none"
        className="filters__select"
      >
        <option value="none">BRAK</option>
        {filterTags.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
