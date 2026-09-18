const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

// 1. Mount Global Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP Request Logger
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// 2. Router Mounting
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api/applications", applicationRoutes);
app.use("/api/auth", authRoutes);

// 3. Base Health Check Endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PG Internships MVC API Server is fully operational",
    timestamp: new Date().toISOString()
  });
});

// 4. Global 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Resource not found on endpoint - ${req.originalUrl}`
  });
});

// 5. Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Express Error Handler:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
});

module.exports = app;
