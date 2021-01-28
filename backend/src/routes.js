const { Router } = require("express");
const UserController = require("./controller/UserController");

const routes = Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.find);

module.exports = routes;
