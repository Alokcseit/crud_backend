require("dotenv").config({quiet:true})
const { app } = require("./app")
const {db} = require("./db/db")
const cors =require("cors")
app.use(cors(
  {
    origin:"*",
    methods:['GET', 'POST', 'PUT', 'DELETE']
  }
))
db()

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})

 
 