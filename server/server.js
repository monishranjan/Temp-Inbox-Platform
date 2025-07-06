const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const emailRoutes = require("./routes/emailRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/emails", emailRoutes);

// Health check
app.get("/", (req, res) => res.send("✅ Backend is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
