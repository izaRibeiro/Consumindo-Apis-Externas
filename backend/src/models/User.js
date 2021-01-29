const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", UserSchema);
