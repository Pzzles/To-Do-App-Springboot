import httpClient from "../api/http-common";

export const readAll = () => {
    return httpClient.get("/allnotes");
}

export const saveNotes = (note) => {
    return httpClient.post("/newnote", note);
}