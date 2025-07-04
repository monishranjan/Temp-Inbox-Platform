require("dotenv").config();
const express = require("express");
const cors = require("cors");

const emailRoutes = require("./routes/emailRoutes");
const smsRoutes = require("./routes/smsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/emails", emailRoutes);
app.use("/api/sms", smsRoutes);


// Health Check Endpoint
app.get("/", (req, res) => res.send("✅ Backend is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));