const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "marwadi meal club", // exact database name
});

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Failed:", err);
    return;
  }

  console.log("✅ MySQL Connected");
});

module.exports = db;