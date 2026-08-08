const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb+srv://aiart7964_db_user:Deepak12345@cluster0.wjukj0r.mongodb.net/marwadimealclub?retryWrites=true&w=majority&appName=Cluster0";

    console.log("📦 Connecting to MongoDB...");

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
    return true;
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    return false;
  }
};

module.exports = connectDB;
