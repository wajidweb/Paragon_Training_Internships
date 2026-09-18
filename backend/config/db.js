const mongoose = require("mongoose");
const Admin = require("../models/Admin");

// Establish connection to MongoDB Atlas Cluster
// Automatically seeds the Admin User dynamically if it does not exist
const connectDatabase = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/pginternships";
    await mongoose.connect(dbUrl);
    console.log("Database connected successfully to matching MVC connection endpoint: Connected to MongoDB Atlas Cluster");
    
    // Seed the Admin User dynamically using environment variables
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminEmail || !adminPassword) {
      console.warn("Database seeding skipped: ADMIN_EMAIL or ADMIN_PASSWORD is not defined in the environment variables.");
      return;
    }
    
    const adminExists = await Admin.findOne({ email: adminEmail.toLowerCase() });
    if (!adminExists) {
      const newAdmin = new Admin({
        email: adminEmail,
        password: adminPassword,
        role: "Administrator"
      });
      await newAdmin.save();
      console.log(`Database seeded successfully! Created admin user: ${adminEmail}`);
    } else {
      console.log(`Database initialized. Admin user already exists: ${adminEmail}`);
    }
  } catch (error) {
    console.error("Database connection or seeding failure:", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
