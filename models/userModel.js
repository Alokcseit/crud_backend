const mongoose =require("mongoose")
const {v4: uuidv4}=require("uuid")
const id = uuidv4();
console.log(id)
 const userSchema = new  mongoose.Schema({
     id:{
       type:String,
       default:id
     },
     username:{
      type:String,
      required:[true,"enter in lowercase"]
     },
     email:{
       type:String,
       required:true
     },
     password:{
       type:String,
       required:true
     },
      gender:{
        type:String,
        enum:["male","female","others"]
      },
      maritalstatus:{
        type:String,
        required:true,
        enum:["single","married"]
      },
      bloodgroup:{
        type:String,
        enum:["O","A","B","AB","A-","B-","AB-","O-"]
      },
      color:{
        type:String,
        enum:["fair","brown","black"]
      }
  },{timestamps:true})

  const User= mongoose.model("User",userSchema)

  module.exports ={User}