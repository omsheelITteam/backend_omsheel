// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const connectDB = require("../Backend/config/monogoDB");
// const app = express();
// const authRouter=require('../Backend/routes/authRouter');
// const userRoute = require("./routes/userRoute");
// // app.use(cors({origin:process.env.PORT, credentials: true }));
// app.use(cors({origin:process.env.PORT, credentials: true }));
// app.use(express.json());
// app.use(cookieParser());
// require("dotenv").config();
// connectDB();
// // API'S OF USER AUTHENTICATION
// app.use('/api/auth',authRouter)
// app.use('/api/user',userRoute)
// const PORT = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   res.send("Hello server working");
// });
// app.listen(PORT, () => {
//   console.log("server started successfully");
// });
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("../Backend/config/monogoDB");
require("dotenv").config();

const app = express();
const authRouter = require("../Backend/routes/authRouter");
const userRoute = require("./routes/userRoute");

// ✅ Proper CORS setup
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://frontend-omsheel-hf4s.vercel.app/"
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://frontend-omsheel-i9bc-5dhyhxg7n-shathamanyus-projects.vercel.app"
// ];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true
// }));
// const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "https://frontend-omsheel.vercel.app",
  "https://omsheelgroup.in",
  "https://www.omsheelgroup.in"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true
}));



app.use(express.json());
app.use(cookieParser());

// ✅ Connect to DB
connectDB();

// ✅ Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello server working");
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
