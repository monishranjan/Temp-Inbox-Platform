const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: String,
  token: String,
  mailtm_id: String, // ID from mail.tm
  messageCount: Number,
  lastActive: Date,
}, { timestamps: true });

emailSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 }); // 86400 = 24 hours

module.exports = mongoose.model("Email", emailSchema);