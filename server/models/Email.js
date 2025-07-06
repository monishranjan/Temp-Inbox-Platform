const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    address: { type: String, required: true, unique: true },
    lastActivity: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Email', emailSchema);