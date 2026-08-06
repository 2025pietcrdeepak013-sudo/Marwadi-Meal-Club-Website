const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Booking Route Working",
  });
});

router.post("/", (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  const { name, phone, address, plan, message } = req.body;

  const sql =
    "INSERT INTO bookings (name, phone, address, plan, message) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, phone, address, plan, message], (err, result) => {
    if (err) {
      console.error("MYSQL ERROR:", err);

      return res.status(500).json({
        success: false,
        error: err.message,
        code: err.code,
      });
    }

    res.json({
      success: true,
      message: "Booking Saved Successfully",
    });
  });
});

module.exports = router;