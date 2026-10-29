 const express =  require("express");
const { createNotesController, getAllNotesController, getSingleNoteController, updateNotesController, deleteNoteController, singleEntityUpdateController } = require("../controllers/notes.controller");
const noteModel = require("../models/notes.models");


 const router = express.Router();
// Create
 router.post("/create", createNotesController);
 
 // read all
 router.get("/allNotes", getAllNotesController);
 
 // Read one
 router.get("/:id", getSingleNoteController);

// Update
router.put("/:id", updateNotesController);

//update via PATCH
router.patch("/:id/single", singleEntityUpdateController);

//delete
router.delete("/:id", deleteNoteController);

 module.exports = router;
