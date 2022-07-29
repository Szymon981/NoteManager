import { takeEvery, put } from "redux-saga/effects";
import {
  deleteNote,
  setNotesAsync,
  setCurrentNotesAsync,
  saveNewNote,
  updateNote,
  setNotes,
  setCurrentNotes,
  setSearchNotesAsync,
  setSearchNotes,
} from "../consts/Consts";
import {
  getAllNotes,
  saveNewNoteHandler,
  updateNoteHandler,
  deleteNoteHandler,
  searchNoteHandler,
} from "../api/ApiConnections";

export function* watchNotesActions() {
  yield takeEvery(setNotesAsync, noteSetter);
  yield takeEvery(setCurrentNotesAsync, noteSetter);
  yield takeEvery(saveNewNote, saveNewNoteAsync);
  yield takeEvery(updateNote, updateNoteAsync);
  yield takeEvery(deleteNote, deleteNoteAsync);
  yield takeEvery(setSearchNotesAsync, searchNotesAsync);
}

function* noteSetter(action) {
  let notes = [];
  yield getAllNotes()
    .then((text) => {
      notes = JSON.parse(text);
    })
    .catch((error) => console.warn(error));
  yield put({
    type: action.type === setNotesAsync ? setNotes : setCurrentNotes,
    value: notes,
  });
}

function* saveNewNoteAsync(action) {
  yield saveNewNoteHandler(action);
  yield put({ type: setNotesAsync });
  yield put({ type: setCurrentNotesAsync });
}

function* updateNoteAsync(action) {
  yield updateNoteHandler(action);
  yield put({ type: setNotesAsync });
  yield put({ type: setCurrentNotesAsync });
}

function* deleteNoteAsync(action) {
  yield deleteNoteHandler(action);
  yield put({ type: setNotesAsync });
  yield put({ type: setCurrentNotesAsync });
}

function* searchNotesAsync(action) {
  let notes = [];

  if (action.value) {
    yield searchNoteHandler(action)
      .then((text) => {
        notes = JSON.parse(text);
      })
      .catch((error) => console.warn(error));
  }
  yield put({ type: setSearchNotes, value: notes });
}
