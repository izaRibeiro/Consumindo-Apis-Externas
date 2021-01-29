import { http } from "./config";

export default {
    find: () => {
        return http.get("/users");
    },
    store: (user) => {
        return http.post("/users", user);
    },
};
