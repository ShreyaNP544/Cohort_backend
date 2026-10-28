const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: [20, "Minimum 20 characters are required"],
    },
});

const noteModel = mongoose.model("notes", noteSchema);
module.exports = noteModel;