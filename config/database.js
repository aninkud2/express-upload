require("dotenv").config();
const mongoose = require("mongoose");
const Uri = process.env.db;

 const database = mongoose.connect(Uri)
.then(()=>{
    console.log(`Database connected successfully.`)
})
.catch((error)=>{
    console.log(`Error connecting to database.`, error)
}); 
module.exports= database