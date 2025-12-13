const express= require("express")
const {userController,getAllUsers}=require("../controllers/userController")
const userRoute=express.Router()

userRoute.post("/test/user",userController)
userRoute.get("/test/user",getAllUsers)

module.exports={userRoute}


