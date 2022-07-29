export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#42275a",
    color: "navajowhite",
    maxWidth: "550px",
  },
};

export const notesURL = "http://localhost:3000/notes/";
export const searchURL = "http://localhost:3000/search?q=";

export const setNotesAsync = "SET_NOTES_ASYNC";
export const setCurrentNotesAsync = "SET_CURRENT_NOTES_ASYNC";
export const setNotes = "SET_NOTES";
export const setCurrentNotes = "SET_CURRENT_NOTES";
export const saveNewNote = "SAVE_NEW_NOTE_ASYNC";
export const updateNote = "UPDATE_NOTE_ASYNC";
export const deleteNote = "DELETE_NOTE_ASYNC";
export const setSearchNotes = "SEARCH_NOTES";
export const setSearchNotesAsync = "SEARCH_NOTES_ASYNC";
