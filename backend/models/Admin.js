const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "Administrator"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to hash password if modified
AdminSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  } catch (error) {
    throw error;
  }
});

module.exports = mongoose.model("Admin", AdminSchema);
