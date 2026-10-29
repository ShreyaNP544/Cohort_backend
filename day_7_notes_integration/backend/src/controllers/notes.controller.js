const noteModel = require("../models/notes.models");

const createNotesController = async (req, res) => {
    try {

        let {title, description} = req.body;
        
        let newNote = await noteModel.create({
            title,
            description,
        });

        return res.status(201).json({
            message: "Note created successfully",
            data: newNote,
        });
        
    } catch (error) {
      return res.status(500).json({
            message: "Internal Server Error",
        });   
    }
};

const getAllNotesController =  async (req, res)=>{
   try {
    const allNotes =  await noteModel.find();

    res.status(200).json({
        message: "All notes fetched",
        data : allNotes,
    });

   } catch (error) {
   return res.status(500).json({
            message: "Internal Server Error",
        });
   }
};

const getSingleNoteController =  async (req, res) => {
    try {
        let noteId = req.params.id;

        let note = await noteModel.findById(noteId);
        
        res.status(200).json({
           message: "Note fetched successfully",
           data: note,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
 };

const updateNotesController = async (req,res)=> {
    try {
        let noteId = req.params.id;
        let body = req.body;

        let updateNote = await noteModel.findByIdAndUpdate(noteId, body, {
            new: true,
        });   
        
        return res.status(200).json({
            message: "Note Updated successfully",
            data: updateNote,
        });
    
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

const deleteNoteController = async (req, res) => {
     try {
        let noteId = req.params.id;

        await noteModel.findByIdAndDelete(noteId);

        return res.status(200).json({
           message: "Note deleted successfully",
        });
        
     } catch (error) {
        return res.status(500).json({
          message : "Internal server error",
        });
     }
};

const singleEntityUpdateController = async (req, res) => {
    try {
        let noteId = req.params.id;
        let body = req.body;

        let updatedNote = await noteModel.findByIdAndUpdate(noteId, body, {
            new : true,
        });
        
        return res.status(200).json({
          message: "Note updated successfully",
          data : updatedNote,
        });
        
    } catch (error) {
        return res.status(500).json({
          message : "Internal server error",
        });
    }
}

module.exports = {
     createNotesController,
     getAllNotesController,
     getSingleNoteController,
     updateNotesController,
     deleteNoteController,
     singleEntityUpdateController,
};