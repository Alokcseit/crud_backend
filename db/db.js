const mongoose = require("mongoose");

  const db = async()=>{
   try {
    const dbresponse= await mongoose.connect(`mongodb+srv://Alok2023:Alok2023@cluster0.at4pi20.mongodb.net/Alok2023?appName=Cluster0`)
    console.log("database connected successfully to " ,dbresponse?.connection.name)
   } catch (error) {
    console.log(error)
   }
  }

  module.exports = {db}