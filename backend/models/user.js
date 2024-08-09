const mongoose = require("mongoose");

// Define schema for user registration
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rollNo: { type: String },
  course: { type: String },
  batch: { type: String },
  preference: { type: String, enum: ['user', 'admin'], default: 'user' }

});

module.exports = mongoose.model("User", userSchema);
