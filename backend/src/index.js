const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.get("/", (request, response) =>
    response.json({ message: "Aplicação rodando corretamente" })
);

mongoose.connect(
    "mongodb+srv://iza:iza@cluster0.xcpnh.mongodb.net/apiExterna?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
