const axios = require("axios");
const Email = require("../models/Email");

// Mail.tm base URL
const BASE_URL = "https://api.mail.tm";

const generateRandomString = (length = 10) => {
  return Math.random().toString(36).substring(2, 2 + length);
};

const createEmailAccount = async () => {
  try {
    // Get domain from Mail.tm
    const domainsRes = await axios.get(`${BASE_URL}/domains`);
    const domain = domainsRes.data["hydra:member"][0].domain;

    const username = generateRandomString(8);
    const password = generateRandomString(12);
    const email = `${username}@${domain}`;

    // 1. Create account
    await axios.post(`${BASE_URL}/accounts`, {
      address: email,
      password,
    });

    // 2. Login to get token
    const loginRes = await axios.post(`${BASE_URL}/token`, {
      address: email,
      password,
    });

    const token = loginRes.data.token;

    // 3. Save to DB
    const newEmail = new Email({
      email,
      password,
      token,
      messageCount: 0,
      lastActive: new Date(),
    });

    await newEmail.save();
    return newEmail;
  } catch (error) {
    console.error("❌ Error creating Mail.tm account:", error.message);
    return null;
  }
};

module.exports = {
  createEmailAccount,
};