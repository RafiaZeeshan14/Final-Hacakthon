const mongoose = require("mongoose");

// Define schema for user registration
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rollNo: { type: String, required: true },
  course: { type: String, required: true },
  batch: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
