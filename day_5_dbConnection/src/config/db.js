const { default: mongoose } = require("mongoose");

const connectDB = async () =>{
    try {
       await mongoose.connect(
        "mongodb+srv://shreyanp4m_db_user:5E5TW8pK5Ia7V65A@cohortcluster.okyb5ux.mongodb.net/",
      );

    console.log("MongoDB connected");
      
    } catch (error) {
      console.log("Error while connecting MongoDB", error); 
    }
};

module.exports = connectDB;