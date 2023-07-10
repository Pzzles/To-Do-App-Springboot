import httpClient from "../api/http-common";

export const readAll = () => {
    return httpClient.get("/allnotes");
}