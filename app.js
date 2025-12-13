const express = require("express")
const cors = require("cors");
const { userRoute } = require("./routes/userRoute");

const app = express();

// ✅ CORS MUST be before routes
app.use(
  cors({
    origin: "*",   // allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// ✅ routes after cors
app.use("/v1", userRoute);

module.exports = { app };

