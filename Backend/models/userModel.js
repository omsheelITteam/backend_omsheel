const mongoose = require("mongoose");

// Define the schema for user data
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verifyOtp: { type: String, default: "" },
    verifyOtpExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: "" },
    resetOtpExpireAt: { type: String, default: 0 },
  },
  { timestamps: true }
);
// Create or retrieve the 'users' model from mongoose
const userModel =
  mongoose.models.users || mongoose.model("newusers", userSchema);
module.exports = mongoose.model("newusers", userSchema);
