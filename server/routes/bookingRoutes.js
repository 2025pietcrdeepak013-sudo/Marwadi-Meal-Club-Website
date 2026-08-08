const express = require("express");
const { getPool } = require("../config/db");

const router = express.Router();

// ✅ TEST DATABASE CONNECTION
router.get("/test-db", async (req, res) => {
  try {
    const pool = await getPool();
    const conn = await pool.getConnection();
    const result = await conn.execute("SELECT 1 as connected");
    conn.release();
    
    res.json({
      success: true,
      message: "Database connected successfully ✅",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Database connection failed",
      message: err.message,
    });
  }
});

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

  let conn;
  try {
    const pool = await getPool();
    conn = await pool.getConnection();
    
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

    console.log("✅ Booking Saved - ID:", result.insertId);

    return res.json({
      success: true,
      message: "Booking Successful ✅",
      bookingId: result.insertId,
    });
  } catch (err) {
    console.error("❌ Database Error:", err.message);
    return res.status(500).json({
      error: "Database Error: " + err.message,
      success: false,
    });
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

// ✅ GET ALL BOOKINGS
router.get("/all", async (req, res) => {
  try {
    const pool = await getPool();
    const conn = await pool.getConnection();
    const [bookings] = await conn.execute("SELECT * FROM bookings ORDER BY created_at DESC");
    conn.release();

    res.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch bookings",
      success: false,
      message: err.message,
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