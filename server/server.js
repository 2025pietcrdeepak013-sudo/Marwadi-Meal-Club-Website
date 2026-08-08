require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");

// 🔥 BODY PARSE
app.use(express.json());

app.use(cors());

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// 🔥 API ROUTE
app.use("/api/bookings", bookingRoutes);

// 🔥 START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running on Port ${PORT}`);
});