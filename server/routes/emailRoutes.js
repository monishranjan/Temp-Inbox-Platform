const express = require('express');
const router = express.Router();

const {
    getEmails,
    getInbox,
    addMessage,
    createEmail,
} = require('../controllers/emailController');

router.get("/", getEmails);
router.get("/:id", getInbox);
router.post("/add", addMessage);
router.post("/create", createEmail);

module.exports = router;