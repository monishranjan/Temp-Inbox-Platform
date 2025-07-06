const axios = require("axios");

const BASE_URL = "https://api.mail.tm";

let cachedToken = null;

async function getToken(email, password) {
  const res = await axios.post(`${BASE_URL}/token`, { address: email, password });
  return res.data.token;
}

exports.getMessages = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const token = await getToken(email, password);

    const messagesRes = await axios.get(`${BASE_URL}/messages`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    res.json(messagesRes.data["hydra:member"]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch messages." });
  }
};
