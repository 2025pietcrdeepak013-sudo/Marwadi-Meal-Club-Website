const express = require("express");
const pool = require("../config/db");

const router = express.Router();

// ✅ CREATE BOOKING
router.post("/", async (req, res) => {
  const { name, phone, address, plan, message } = req.body;

  // Validation
  if (!name || !phone || !address || !plan) {
    return res.status(400).json({
      error: "All fields required",
      success: false,
    });
  }

  try {
    const conn = await pool.getConnection();
    
    const query = `
      INSERT INTO bookings (name, phone, address, plan, message, created_at)
      VALUES (?, ?, ?, ?, ?, NOW())
    `;
    
    const [result] = await conn.execute(query, [
      name,
      phone,
      address,
      plan,
      message || "",
    ]);

    conn.release();

    console.log("✅ Booking Saved:", result.insertId);

    return res.json({
      success: true,
      message: "Booking Successful ✅",
      bookingId: result.insertId,
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
    return res.status(500).json({
      error: err.message || "Server Error ❌",
      success: false,
    });
  }
});

// ✅ TEST ROUTE
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Booking Route Working 🚀",
  });
});

module.exports = router;