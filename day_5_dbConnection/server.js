require("dotenv").config();
const app = require("./src/app");

let port = process.env.port || 4000 ;

app.listen(3000, () => {
   console.log(`Server is running on port ${port}`);
});
