const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, unique: true },
  profileImage: { type: String },
  bio: { type: String },
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String,
    portfolio: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
