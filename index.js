require("dotenv").config({quiet:true})
const { app } = require("./app")
const {db} = require("./db/db")

db()

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})

 
 