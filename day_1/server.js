let http = require("http");

let server = http.createServer((req, res) => {
     console.log("This is server");
     res.end("Server is running now..");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000..");
});