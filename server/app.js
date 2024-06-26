const express = require("express");
const connect = require("./db/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const songRoutes = require("./routes/songRoutes");
const playlistRoutes = require("./routes/playlistRoutes")
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

// Database Connection
connect();

//
app.get("/", (req, res) => {
  res.send("buri buri");
});

// Routes
app.use("/api", authRoutes);
app.use("/api", songRoutes);
app.use("/api", playlistRoutes)

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
