require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/mongodb");
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

async function startServer() {
  try {
    // Connect to MongoDB
    console.log("🔄 Connecting to MongoDB...");
    const connected = await connectDB();
    
    if (!connected) {
      console.error("❌ Failed to connect to MongoDB");
      process.exit(1);
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ Server Running on Port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
}

startServer();