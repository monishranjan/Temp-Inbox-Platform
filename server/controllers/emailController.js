const Email = require("../models/Email");
const Message = require("../models/Message");

// Get all emails
exports.getEmails = async (req, res) => {
  const emails = await Email.find();
  const enriched = await Promise.all(
    emails.map(async (email) => {
      const count = await Message.countDocuments({ email: email._id });
      return {
        id: email._id,
        address: email.address,
        lastActivity: email.lastActivity,
        totalMessages: count,
      };
    })
  );
  res.json(enriched);
};

// Get inbox by ID
exports.getInbox = async (req, res) => {
  const email = await Email.findById(req.params.id);
  if (!email) return res.status(404).json({ error: "Email not found" });

  const messages = await Message.find({ email: email._id }).sort({ createdAt: -1 });
  res.json(messages);
};

// Add a message manually (for now)
exports.addMessage = async (req, res) => {
  const { emailId, from, subject, body } = req.body;

  const email = await Email.findById(emailId);
  if (!email) return res.status(404).json({ error: "Email not found" });

  const message = new Message({ email: emailId, from, subject, body });
  await message.save();

  email.lastActivity = Date.now();
  await email.save();

  res.status(201).json({ message: "Message added", data: message });
};

// (Optional) Create new temp email
exports.createEmail = async (req, res) => {
  const { address } = req.body;

  const existing = await Email.findOne({ address });
  if (existing) return res.status(409).json({ error: "Email already exists" });

  const email = new Email({ address });
  await email.save();

  res.status(201).json(email);
};
