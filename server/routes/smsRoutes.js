const express = require('express');
const router = express.Router();
const sms = require('../data/smsInbox');

router.get("/", (req, res) => {
    res.json(sms);
});

module.exports = router;