import { setCurrentNotes, setNotes, setSearchNotes } from "../consts/Consts";

const initialState = {
  notes: [],
  currentNotes: [],
  searchNotes: [],
};

const rootReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === setNotes) {
    newState.notes = action.value;
  } else if (action.type === setCurrentNotes) {
    newState.currentNotes = action.value;
  } else if (action.type === setSearchNotes) {
    newState.searchNotes = action.value;
  }
  return newState;
};

export default rootReducer;
