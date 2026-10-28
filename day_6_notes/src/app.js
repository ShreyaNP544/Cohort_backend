const express = require("express");
const noteModel = require("./models/notes.models");
const connectDB = require("./config/db");
const notesRoutes = require("./routes/notes.route");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api get");
});

app.use("/notes", notesRoutes);

module.exports = app;