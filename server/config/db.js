const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "marwadi_meal_club",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelayMs: 0,
  multipleStatements: false,
});

pool
  .getConnection()
  .then((conn) => {
    console.log("✅ MySQL Pool Connected Successfully");
    conn.release();
    
    // Create database and table if they don't exist
    initializeDatabase();
  })
  .catch((err) => {
    console.log("❌ MySQL Connection Failed:", err.message);
    console.log("Make sure MySQL is running and credentials are correct!");
  });

// Initialize database structure
async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  try {
    // Create database
    await connection.execute(
      `CREATE DATABASE IF NOT EXISTS \`marwadi_meal_club\``
    );

    // Use database
    await connection.execute(`USE \`marwadi_meal_club\``);

    // Create bookings table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS \`bookings\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`name\` VARCHAR(100) NOT NULL,
        \`phone\` VARCHAR(20) NOT NULL,
        \`address\` TEXT NOT NULL,
        \`plan\` VARCHAR(50) NOT NULL,
        \`message\` TEXT,
        \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX \`idx_phone\` (\`phone\`),
        INDEX \`idx_created_at\` (\`created_at\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    console.log("✅ Database and tables initialized successfully");
  } catch (err) {
    console.log("⚠️  Database setup warning:", err.message);
  } finally {
    await connection.end();
  }
}

module.exports = pool;