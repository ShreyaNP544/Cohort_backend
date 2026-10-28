const express = require ("express");
const dns = require("dns");
const connectDB = require("./config/db");
const noteModel = require("./models/noteModel");

// system DNS points at 127.0.0.1, which refuses SRV lookups for mongodb+srv
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
app.use(express.json());
// let port = 3000;

connectDB();

app.get("/", (req, res)=>{
   res.send("get api done");
});

app.post("/create", async (req, res) => {
    let {title, description} = req.body;
    const newNote = await noteModel.create({
        title,
        description,
    });
    res.send({
        success : true,
        message : "Note created successfully",
        data : newNote,
    });
});  

// app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
// });


module.exports = app;
