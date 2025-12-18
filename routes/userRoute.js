const express= require("express")
const {userController,getAllUsers,getSingleUserById,updateUserById ,deleteUser}=require("../controllers/userController")
const userRoute=express.Router()

userRoute.post("/test/user",userController)
userRoute.get("/test/user",getAllUsers)
userRoute.get("/test/user/:id",getSingleUserById)
userRoute.put("/test/user/:id",updateUserById)
userRoute.delete("/test/user/:id",deleteUser)
module.exports={userRoute}


