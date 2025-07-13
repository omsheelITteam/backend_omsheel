const validateEmail = (email) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};
require('dotenv').config()
const transporter = require("../config/userEmail.js");
const {CONTACT_SUBMISSION}=require('../emailTemplates/emailTemplates.js')

const getInTouch = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.json({ success: false, message: "All fields must be filled" });
  }

  try {
    if (phone.length < 10 || !validateEmail(email)) {
      return res.json({ success: false, message: "Invalid phone or email" });
    }

    const htmlContent = CONTACT_SUBMISSION
      .replace("{firstName}", firstName)
      .replace("{lastName}", lastName)
      .replace("{email}", email)
      .replace("{phone}", phone)
      .replace("{message}", message);

    const receiverEmail = {
      from: email,
      to: process.env.SENDER_EMAIL,
      subject: "📨 New Contact Submission - Omsheel Group",
      html: htmlContent,
      // category: "Email Verification" // remove if unused
    };

    await transporter.sendMail(receiverEmail);

    return res.json({ success: true, message: "Data submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error.message });
  }
};

module.exports = { getInTouch };
