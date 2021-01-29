import { httpSwapi } from "./config";

export default {
    films: () => {
        return httpSwapi.get("/films/");
    },
    planets: () => {
        return httpSwapi.get("/planets/");
    },
    species: () => {
        return httpSwapi.get("/species/");
    },
    starships: () => {
        return httpSwapi.get("/starships/");
    },
};
