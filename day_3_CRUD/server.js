const express = require("express");

const app = express();

// middleware for accepting json data
app.use(express.json());
let  port = 3000;

let users = [];

// post = create
app.post("/create", (req, res) =>{
    let body = req.body;
    
    users.push(body);
    
    res.send("User saved successfully");
});


// get - read
app.get("/", (req, res)=>{
    res.send(users);
});

// delete
app.delete("/delete/:id", (req, res) => {
    let { id } = req.params;

    let userData = users.filter((val) => val.id !== id);
    users = userData;
    res.send("User deleted successfully");
});

// update 
app.put("/update/:id", (req, res) => {
    let { id } = req.params;
    let { name } = req.body;

    let updatedUser = users.map((val) => val.id === id ? {...val, name} : val);
    res.send(updatedUser);
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});