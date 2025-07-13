const IncubatorData = require("../models/incubatorModel.js");
const transporter = require("../config/userEmail.js");
const {
  INCUBATOR_EMAIL_SUCCESS,
} = require("../emailTemplates/emailTemplates.js");
const submitData = async (req, res) => {
  const { name, email, idea, budget } = req.body;

  if (!name || !email || !idea || !budget) {
    return res.status(400).json({ message: "All field are Requird" });
  }

  try {
    const newData = new IncubatorData({ name, email, idea, budget });
    await newData.save();

    // mail OPtions //

   const mailOptions = {
  from: email,
  to: process.env.SENDER_EMAIL,
  subject: "A New Idea has been Received",
  html: INCUBATOR_EMAIL_SUCCESS
    .replace("{name}", name)
    .replace("{email}", email)
    .replace("{idea}", idea)
    .replace("{budget}", budget),
};
;
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Data Submitted Successfully" });
  } catch (error) {
    console.error("Data Submitting Error", error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = submitData;
