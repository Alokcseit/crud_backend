require("dotenv").config({quiet:true})
const { app } = require("./app")
const {db} = require("./db/db")
const cors =require("cors")
app.use(cors(
  {
    origin:"http://localhost:5173",
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }
))
db()

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})

 
 