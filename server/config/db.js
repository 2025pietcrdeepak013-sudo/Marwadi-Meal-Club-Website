const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "marwadi meal club",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelayMs: 0,
});

pool.getConnection()
  .then((conn) => {
    console.log("✅ MySQL Pool Connected");
    conn.release();
  })
  .catch((err) => {
    console.log("❌ MySQL Connection Failed:", err.message);
  });

module.exports = pool;