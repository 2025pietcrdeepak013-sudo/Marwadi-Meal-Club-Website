const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ✅ TEST ROUTE (browser check ke liye)
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Booking Route Working",
  });
});

// ✅ CREATE BOOKING
router.post("/", (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  const { name, phone, address, plan, message } = req.body;

  // 🔥 Basic validation
  if (!name || !phone || !address || !plan) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO bookings (name, phone, address, plan, message) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, phone, address, plan, message || ""], (err, result) => {
    if (err) {
      console.error("MYSQL ERROR:", err);

      return res.status(500).json({
        success: false,
        error: err.message,
        code: err.code,
      });
    }

    // ✅ SUCCESS RESPONSE (IMPORTANT)
    res.json({
      success: true,
      message: "Booking Saved Successfully",
      bookingId: result.insertId,
    });
  });
});

module.exports = router;