const express = require("express");

const app = express();

app.get("/", (request, response) =>
    response.json({ message: "Aplicação rodando corretamente" })
);

app.listen(3333);
