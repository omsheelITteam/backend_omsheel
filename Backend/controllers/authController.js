// DEPENDECIES

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// IMPORTED FILES
const userModel = require("../models/userModel");
const senderEmail = require("../config/userEmail");
const {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  EMAIL_VERIFIED_SUCCESSFULLY,
  CONTACT_SUBMISSION
} = require("../emailTemplates/emailTemplates");
require("dotenv").config();
const JWT_SECRETKEY = process.env.JWT_SECRETKEY;
// USER REGISTER
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "Details are Missing" });
  }
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "user already exists" }); // ✅ added return
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let verifyOtp = "";
    for (let i = 0; i < 6; i++) {
      const GeneratedOtp = Math.floor(Math.random() * 10);
      verifyOtp += GeneratedOtp;
    }

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      verifyOtp,
      verifyOtpExpireAt: Date.now() + 60 * 1000,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRETKEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const receiverEmail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to Omsheel",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationcode}",
        verifyOtp
      ),
      category: "Email Verification",
    };
    await senderEmail.sendMail(receiverEmail);

    return res.json({
      success: true,
      message: "created your account",
      message2: "Otp Sended",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message }); // ✅ added return
  }
};
// USER LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ success: false, message: "Missing Details" });
  }
  try {
    // const user = await userModel.findOne({ email });
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid email" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRETKEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true, message: "login success" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "loggedout" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
// OTP verification section
// const otpVerification = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const user = await userModel.findById(userId);
//     if (user.isAccountVerified) {
//       return res.json({ success: false, message: "Account Already Verified" });
//     }
//     let OTP = "";
//     for (i = 0; i < 5; i++) {
//       Genotp = Math.floor(Math.random() * 10);
//       OTP += Genotp;
//     }
//     user.verifyOtp = OTP;
//     user.verifyOtpExpireAt = Date.now() + 1 * 60 * 1000;
//     await user.save();
//     const mailOption = {
//       from: process.env.SENDER_EMAIL,
//       to: user.email,
//       subject: "Account OTP verification",
//       text: `Your OTP is ${OTP} verify your account using this otp.`,
//     };
//     await transport.sendMail(mailOption);
//     res.json({ success: true, message: "Verification OTP sended to Email" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;
    await user.save(); // ✅ Save the updated token to DB

    const resetURL = `${process.env.RESET_URL}/reset-password/${resetToken}`;

    // Send password reset email
    await senderEmail.sendMail({
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Password Reset Request",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    return res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// const verifyEmail = async (req, res) => {
//   const { code } = req.body;

//   try {
//     const user = await userModel.findOne({
//       verifyOtp: code,
//       verifyOtpExpireAt: { $gt: Date.now() },
//     });

//     if (!user.verifyOtp==''||user.verifyOtp!=code) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid or expired verification code",
//       });
//     }

//     // Update user
//     user.isAccountVerified = true;
//     user.verifyOtp = undefined;
//     user.verifyOtpExpireAt = undefined;
//     await user.save();

//     // Send confirmation email
//     const receiverEmail = {
//       from: process.env.SENDER_EMAIL,
//       to: user.email, // ✅ use from DB
//       subject: "Your Email Has Been Verified",
//       html: `<p>Hello ${user.name},</p>
//              <p>Your email has been successfully verified. Welcome to Omsheel!</p>`,
//     };
//     await senderEmail.sendMail(receiverEmail);

//     return res.status(200).json({
//       success: true,
//       message: "Email verified successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await userModel.findOne({
      verifyOtp: code,
      verifyOtpExpireAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    // Update user
    user.isAccountVerified = true;
    user.verifyOtp = undefined;
    user.verifyOtpExpireAt = undefined;
    await user.save();

    // Send confirmation email
    const receiverEmail = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Your Email Has Been Verified successfully",
      html: EMAIL_VERIFIED_SUCCESSFULLY,
      category: "Email verification",
    };
    await senderEmail.sendMail(receiverEmail);

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//PASSWORD RESET OTP
const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({ success: false, message: "invalid Credentials" });
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    let resetOtp = "";
    for (let i = 0; i < 6; i++) {
      const GeneratedOtp = Math.floor(Math.random() * 10);
      resetOtp += GeneratedOtp;
    }
    user.resetOtp = resetOtp;
    user.resetOtpExpireAt = Date.now() + 60 * 1000;
    const receiverEmail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Password Reset OTP",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetCode}", resetOtp),
      category: "Password Reset",
    };
    await user.save();
    await senderEmail.sendMail(receiverEmail);

    return res.json({ success: true, message: "OTP sent your Email" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, code, newPassword } = req.body;
  if (!email || !code || !newPassword) {
    return res.json({ success: false, message: "All Fields are required" });
  }
  try {
    // const { token } = req.params;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
    // if(user.resetOtp!=code)
    // {
    //   return res.json({success:false,message:'Invalid OTP'})
    // }
    if (!user.resetOtp || user.resetOtp !== code) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (user.resetOtpExpireAt < Date.now()) {
      return res.json({ success: false, message: "OTP Expired" });
    }

    // UPDATE PASSWORD
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpireAt = 0;
    await user.save();
    await senderEmail.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Password Reset successfull",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    res
      .status(200)
      .json({ success: true, message: "password changed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  register,
  login,
  logout,
  // otpVerification,
  verifyEmail,
  isAuthenticated,
  forgotPassword,
  resetPassword,
  sendResetOtp,
};
