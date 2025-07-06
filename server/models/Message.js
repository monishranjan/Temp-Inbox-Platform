const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: { type: mongoose.Schema.Types.ObjectId, ref: 'Email', required: true },
    from: String,
    subject: String,
    body: String,
    read: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);