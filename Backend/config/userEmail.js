const mailer = require("nodemailer");
const https=require('https')
require('dotenv').config()
const senderEmail = mailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSKEY,
  },
  tls: {
    rejectUnauthorized: false, // ✅ Allow self-signed certs (only for dev)
  },
});
module.exports=senderEmail