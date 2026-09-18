const dotenv = require("dotenv");
// Load Environment Variables at the absolute top of entry point
dotenv.config();

const http = require("http");
const app = require("./app");
const connectDatabase = require("./config/db");

const PORT = process.env.PORT || 5001;

// Connect to MongoDB Atlas and seed Admin User
connectDatabase();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running successfully in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});
