import express from "express";

const router = express.Router();

// ✅ TEMP ROUTE (NO DATABASE)
router.post("/", (req, res) => {
  const { name, phone, address, plan } = req.body;

  if (!name || !phone || !address || !plan) {
    return res.status(400).json({
      success: false,
      message: "All fields required",
    });
  }

  console.log("📦 Booking Received:", req.body);

  return res.json({
    success: true,
    message: "Booking Successful 🎉 (No DB)",
  });
});

// ✅ TEST ROUTE
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Booking Route Working 🚀",
  });
});

export default router;