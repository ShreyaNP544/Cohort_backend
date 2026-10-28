const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minlength: 20,
    },
});   

const noteModel = mongoose.model("notes", noteSchema);
module.exports = noteModel;