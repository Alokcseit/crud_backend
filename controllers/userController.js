const {User}= require("../models/userModel")

const userController= async(req,res)=>{
   console.log(req.body)
   const{id,username,email,password,gender,maritalstatus,bloodgroup,color} = req.body;
   const user={
    id,
    username,
    email,
    password,
    gender,
    maritalstatus,
    bloodgroup,
    color
   }
   const response= await User.create(user)
   console.log(response)
   res.send(response)
  }


  const getSingleUserById= async()=>{
       
  }

  const getAllUsers= async(req,res)=>{
     const users=  await User.find({})
     if(!users){
       res.status(404).json({message:"There is no user"})
     }
     res.status(200).
     json(users)
  }

module.exports={userController,getAllUsers}