const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// ✅ TEST DATABASE CONNECTION
router.get("/test-db", async (req, res) => {
  try {
    const bookingCount = await Booking.countDocuments();
    res.json({
      success: true,
      message: "Database connected successfully ✅",
      totalBookings: bookingCount,
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

  try {
    console.log("📤 Creating booking:", { name, phone, plan });

    const booking = new Booking({
      name,
      phone,
      address,
      plan,
      message: message || "",
    });

    const savedBooking = await booking.save();

    console.log("✅ Booking Saved - ID:", savedBooking._id);

    return res.json({
      success: true,
      message: "Booking Successful ✅",
      bookingId: savedBooking._id,
    });
  } catch (err) {
    console.error("❌ Database Error:", err.message);
    return res.status(500).json({
      error: "Database Error: " + err.message,
      success: false,
    });
  }
});

// ✅ GET ALL BOOKINGS
router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

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