require("dotenv").config();
const express = require("express");
const cors = require("cors");

const emailRoutes = require("./routes/emailRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/emails", emailRoutes);

// Health Check Endpoint
app.get("/", (req, res) => res.send("✅ Burnr Email API Live!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));