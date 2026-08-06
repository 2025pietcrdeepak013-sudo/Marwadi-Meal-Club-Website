const bookingRoutes = require("./routes/bookingRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Marwadi Meal Club API Running 🚀",
  });
});

// Test Database Route
app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      data: result,
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running on Port ${PORT}`);
});