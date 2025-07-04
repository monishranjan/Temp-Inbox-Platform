const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchEmails = async () => {
    const res = await fetch(`${BASE}/emails`);
    return res.json();
};

export const fetchSMS = async () => {
    const res = await fetch(`${BASE}/sms`);
    return res.json();
};