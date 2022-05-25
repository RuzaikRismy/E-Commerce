require('dotenv').config();
const mongoose = require("mongoose")

const connectDB = async () =>{
    try{
      await  mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        // useUnifiedToplogy: true
      });
      console.log("MongoDB Connected...");
    } catch (error){
      console.error("MongoDB connection Fail !!!");
      process.exit(1); //This used to exit server, when mongoDb connection fail.
    }
};
module.exports = connectDB;

