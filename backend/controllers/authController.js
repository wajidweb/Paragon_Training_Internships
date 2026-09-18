const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

// @desc    Admin login authentication
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password"
      });
    }

    // Query the remote MongoDB database for the Admin user
    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Verify the hashed password against the hashed string in the database
    const isMatch = bcrypt.compareSync(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Successful login (return simulated token and admin metadata)
    res.status(200).json({
      success: true,
      message: "Admin authenticated successfully",
      admin: {
        email: admin.email,
        role: admin.role
      },
      token: "simulated-jwt-token-pginternships"
    });
  } catch (error) {
    next(error);
  }
};
