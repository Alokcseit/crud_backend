const express = require("express")
const cors = require("cors");
const { userRoute } = require("./routes/userRoute");

const app = express();

app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());


app.use("/v1", userRoute);

module.exports = { app };

