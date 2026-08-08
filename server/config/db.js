const mysql = require("mysql2/promise");

let pool;
let isInitialized = false;

async function initializeDatabase() {
  if (isInitialized) return;

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  try {
    console.log("📦 Creating database if not exists...");
    
    // Create database
    await connection.execute(
      `CREATE DATABASE IF NOT EXISTS \`marwadi_meal_club\``
    );
    console.log("✅ Database created/exists");

    // Use database
    await connection.execute(`USE \`marwadi_meal_club\``);

    // Create bookings table
    const createTableQuery = `
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
    `;
    
    await connection.execute(createTableQuery);
    console.log("✅ Bookings table created/exists");

    isInitialized = true;
  } catch (err) {
    console.error("❌ Database initialization error:", err.message);
    throw err;
  } finally {
    await connection.end();
  }
}

async function getPool() {
  if (!pool) {
    // Initialize database first
    await initializeDatabase();

    // Then create pool
    pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "marwadi_meal_club",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelayMs: 0,
    });

    pool.on("error", (err) => {
      console.error("❌ Pool error:", err.message);
    });

    console.log("✅ MySQL Pool Created Successfully");
  }

  return pool;
}

module.exports = { getPool, initializeDatabase };