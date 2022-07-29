import { notesURL, searchURL } from "../consts/Consts";

export const getAllNotes = () => {
  return fetch(notesURL, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => console.warn(error));
};

export const saveNewNoteHandler = (action) => {
  return fetch(notesURL, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      title: action.noteTitle,
      body: action.noteBody,
      tags: action.noteTags,
      fav: action.fav,
    }),
  }).catch((error) => console.warn(error));
};

export const updateNoteHandler = (action) => {
  return fetch(notesURL + action.id, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      fav: action.fav,
      body: action.body,
    }),
  }).catch((error) => console.warn(error));
};

export const deleteNoteHandler = (action) => {
  return fetch(notesURL + action.id, {
    method: "DELETE",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  }).catch((error) => console.warn(error));
};

export const searchNoteHandler = (action) => {
  return fetch(searchURL + action.value, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => console.warn(error));
};
