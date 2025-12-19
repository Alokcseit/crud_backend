const {User}= require("../models/userModel")

const userController= async(req,res)=>{
   console.log(req.body)
   const{username,email,password,gender,maritalstatus,bloodgroup,color} = req.body;
   
   const user={
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


  const getSingleUserById= async(req,res)=>{
       const {id}=req.params;
       if(!id){
        return new Error("id not provided")
       }
       const user = await User.find({id:id})
       if(user.length === 0){
        console.log("hkadhfjd")
         res.send(`user not found for id ${id}`)
       }
       res.status(200).
       json(user)
  }

  const getAllUsers= async(req,res)=>{
     try {
      const limit = 3;
      let cursor = req.query.cursor;
      let users;
      if(!cursor){
                users = await User.find({isActive:true})
                                  .sort({id:-1})
                                  .limit(limit)
      }
      else{
        users= await User.find({isActive:true ,
          id:{$lt:cursor}
        })
        .sort({id:-1})
        .limit(limit)
      }
     
     if(users.length === 0){
       res.status(404).json({message:"There is no user"})
     }
     res.status(200).
     json({users
      ,
      nextCursor:users.length > 0 ? users[users.length -1].id :null
     })
     } catch (error) {
       
     }
  }

  const updateUserById= async ( req,res)=>{
      const {id} = req.params
      if(!id){
        res.status(404).json({message:"id not provided"})
      }
    const updateData={
      username:req.body.username,
      email:req.body.email,
      password:req.body.password,
      gender:req.body.gender,
      maritalstatus:req.body.maritalstatus,
      bloodgroup:req.body.bloodgroup,
      color:req.body.color
    }

    const updateResponse= await User.findOneAndUpdate(
      {id:id},
      {$set:updateData},
      {new:true}
    )
    if(!updateResponse){
      res.status(404).json({message:"not update successfully"})
    }
    res.status(200).json(updateResponse)
  }
  const deleteUser= async ( req,res)=>{
   try {
     let {id}= req.params
    console.log(id)
    const deleteResponse = await User.findOneAndDelete({id:id})
    console.log(deleteResponse)
    if(!deleteResponse){
      res.status(500).json({message:"Not deleted sussesfully"})
    }
    res.status(200).json({message:"Deleted Successfully"})
   } catch (error) {
    throw new Error("Something Went Wrong")
   }
  } 


module.exports={userController,getAllUsers,getSingleUserById ,updateUserById ,deleteUser}