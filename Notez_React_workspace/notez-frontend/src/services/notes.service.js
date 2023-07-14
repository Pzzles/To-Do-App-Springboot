import httpClient from "../api/http-common";

export const readAll = () => {
    return httpClient.get("/notes");
}

export const saveNotes = (note) => {
    return httpClient.post("/notes", note);
}

export const readNote = (id) => {
    return httpClient.get(`/notes/${id}`);
}
