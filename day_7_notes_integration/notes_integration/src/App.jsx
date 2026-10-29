import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import NoteCard from "./components/NoteCard";

const App = () => {
    
    const [formValue, setFormValue] = useState({
         title: "",
         description: "",
    });

    const [allNotes, setAllNotes] = useState([]);

    const [updateNoteId, setUpdateNoteId] = useState(null);

    const handleChange = (e)=> {
        setFormValue(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    let getAllNotes = async() => {
        try{
          let res = await axios.get("http://localhost:3000/notes/allNotes ");
          //console.log(res);  
           setAllNotes(res.data.data);
        } catch (error) {
            console.log("Error in get all notes api", error);
        }
    };

    useEffect(() => {
       getAllNotes();
    }, []);


      const handleSubmit = async (e) => {
        e.preventDefault();

        if(updateNoteId){
            //update api call
            let res = await axios.put(
                `http://localhost:3000/notes/${updateNoteId}`,
                 formValue );
                 console.log(res);
                 setUpdateNoteId(null);
        } else{
            // add api call
               let res = await axios.post(
                "http://localhost:3000/notes/create",
                 formValue);
                 console.log(res);
        }      
        setFormValue({
            title: "",
            description: "",
        });
        getAllNotes();
    };
    
    let deleteNote = async (id) => {
       try {
         let res= await axios.delete(`http://localhost:3000/notes/${id}`);
         console.log(res);
         getAllNotes();
       } catch (error) {
           console.log("error in deleting note", error);
       }
    };

    let noteForUpdate = (note) => {
           console.log(note);
           setUpdateNoteId(note._id);
           setFormValue({
             title: note.title,
             description: note.description,
           });
    };

   

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Notes app</h1>

      <form onSubmit={handleSubmit} className="w-70 gap-3 border border-white p-4 rounded-xl flex flex-col">
        <input 
        onChange={handleChange}
          name = "title"
          value={formValue.title}
          className="p-2 outline-none text-xl rounded border border-white "
          type="text"
          placeholder="Title"
        />
        <input 
        onChange={handleChange}
          minLength={20}
          name = "description"
          value={formValue.description}
          className="p-2 outline-none text-xl rounded border border-white "
          type="text"
          placeholder="Description"
          required
        />
        <button className="bg-cyan-900 text-xl text-white rounded p-3 cursor-pointer">
          {updateNoteId ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="w-fit flex gap-4">
         {
            allNotes.map((val) => (
                <NoteCard key={val._id} note={val} deleteNote={deleteNote} noteForUpdate={noteForUpdate}/>
            ))
         }
      </div>
    </div>
  );
};

export default App;
