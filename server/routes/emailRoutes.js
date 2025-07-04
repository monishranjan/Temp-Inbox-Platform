const express = require('express');
const router = express.Router();
const emails = require('../data/emailInbox');

router.get("/", (req, res) => {
    res.json(emails);
});

module.exports = router;