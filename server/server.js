require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");
const { initializeDatabase } = require("./config/db");

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

async function startServer() {
  try {
    // Initialize database first
    console.log("🔄 Initializing database...");
    await initializeDatabase();
    console.log("✅ Database initialization complete");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ Server Running on Port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
}

startServer();