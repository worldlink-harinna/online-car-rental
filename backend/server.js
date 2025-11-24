
require("dotenv").config(); // at the very top
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/admindb");

const kycRoutes = require("./routes/kycRoutes");
const authRoutes = require("./routes/authRoutes");
const admincarRoutes = require("./routes/admincarRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

// === Add booking route ===
const bookingRoute = require("./routes/booking"); // <=== ADD THIS

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// === Add booking route middleware ===
app.use("/booking", bookingRoute); // <=== ADD THIS

// Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/kyc", kycRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cars", admincarRoutes);
app.use("/api/vehicles", vehicleRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚗 Car Rental Backend API is running!");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
