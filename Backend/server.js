const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("../Backend/config/monogoDB");
const app = express();
const authRouter=require('../Backend/routes/authRouter');
const userRoute = require("./routes/userRoute");
app.use(cors({origin:process.env.PORT, credentials: true }));
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
connectDB();
// API'S OF USER AUTHENTICATION
app.use('/api/auth',authRouter)
app.use('/api/user',userRoute)
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello server working");
});
app.listen(PORT, () => {
  console.log("server started successfully");
});
