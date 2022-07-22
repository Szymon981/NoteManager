import { notesURL, tagsURL } from "../consts/Consts";

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

export const setAllTags = (setTags) => {
  fetch(tagsURL, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      setTags(JSON.parse(text));
    })
    .catch((error) => console.warn(error));
};

export const setNotes = (noteSetter) => {
  getAllNotes()
    .then((text) => {
      noteSetter(JSON.parse(text));
    })
    .catch((error) => console.warn(error));
};

export const saveNewNote = (noteTitle, noteBody, noteTags, update) => {
  fetch(notesURL, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      title: noteTitle,
      body: noteBody,
      tags: noteTags,
    }),
  })
    .then(() => {
      getAllNotes()
        .then((text) => {
          const notes = Object.entries(JSON.parse(text)).map(([key, value]) => {
            return value;
          });
          update(notes);
        })
        .catch((error) => console.warn(error));
    })
    .catch((error) => console.warn(error));
};

export const updateNoteBody = (id, body) => {
  fetch(notesURL + id, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      body: body,
    }),
  }).catch((error) => console.warn(error));
};

export const deleteNote = (id, noteSetter) => {
  fetch(notesURL + id, {
    method: "DELETE",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then(() => {
      setNotes(noteSetter);
    })
    .catch((error) => console.warn(error));
};
