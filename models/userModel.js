const mongoose =require("mongoose")
 const userSchema = new  mongoose.Schema({
     id:{
       type:String,
       default: ()=>`USER#${Date.now()}`
     },
     username:{
      type:String,
      required:true
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
      },
      isActive:{
        type:Boolean,
        default:true
      }
  },{timestamps:true})
  userSchema.index({ id: 1 });
  const User= mongoose.model("User",userSchema)

  module.exports ={User}