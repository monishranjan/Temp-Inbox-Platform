const axios = require("axios");
const express = require("express");
const router = express.Router();
const Email = require("../models/Email");
const { createEmailAccount } = require("../service/mailtmService");

// GET all emails from DB
router.get("/", async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });

    // Fetch latest message counts for each email
    const updatedEmails = await Promise.all(
      emails.map(async (emailDoc) => {
        try {
          const inboxRes = await axios.get("https://api.mail.tm/messages", {
            headers: {
              Authorization: `Bearer ${emailDoc.token}`,
            },
          });

          const count = inboxRes.data["hydra:totalItems"];

          // Update count in DB if changed
          if (emailDoc.messageCount !== count) {
            emailDoc.messageCount = count;
            emailDoc.lastActive = new Date();
            await emailDoc.save();
          }

          return emailDoc;
        } catch (err) {
          console.error(
            `Failed to fetch inbox for ${emailDoc.email}`,
            err.message
          );
          return emailDoc; // Still return the email doc with old data
        }
      })
    );

    res.json(updatedEmails);
  } catch (err) {
    console.error("GET /emails error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/emails/create → generate new email via Mail.tm
router.post("/create", async (req, res) => {
  const emailDoc = await createEmailAccount();
  if (emailDoc) {
    res.status(201).json(emailDoc);
  } else {
    res.status(500).json({ error: "Failed to create email" });
  }
});

// GET inbox messages for a specific email by ID
router.get("/:id/inbox", async (req, res) => {
  const { id } = req.params;

  try {
    const emailDoc = await Email.findById(id);
    if (!emailDoc) {
      return res.status(404).json({ error: "Email not found" });
    }

    const token = emailDoc.token;

    const inboxRes = await axios.get("https://api.mail.tm/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const messages = inboxRes.data["hydra:member"] || [];

    // 🟢 Update messageCount and lastActive in DB
    emailDoc.messageCount = messages.length;
    emailDoc.lastActive = new Date();
    await emailDoc.save();

    res.json(inboxRes.data);
  } catch (err) {
    console.error("❌ Error fetching inbox:", err.message);
    res.status(500).json({ error: "Failed to fetch inbox messages" });
  }
});

module.exports = router;
