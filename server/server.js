const express = require("express");
const app = express();

const bookingRoutes = require("./routes/bookingRoutes");

// 🔥 BODY PARSE
app.use(express.json());

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// 🔥 API ROUTE
app.use("/api/bookings", bookingRoutes);

// 🔥 START SERVER
app.listen(5000, "0.0.0.0", () => {
  console.log("Server Running on Port 5000");
});