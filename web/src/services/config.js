import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:3333",
});

export const httpSwapi = axios.create({
    baseURL: "https://swapi.dev/api",
});
