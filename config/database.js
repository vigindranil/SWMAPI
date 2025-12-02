const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',  
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  // 🔥 Fix ETIMEDOUT issues
  connectTimeout: 10000,        // 10 sec to establish connection
  acquireTimeout: 10000,        // 10 sec to get connection from pool

  // 🔥 Prevent MySQL dropping idle connections
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

console.log(
  `MySQL Pool created → Host: ${process.env.DB_HOST}, DB: ${process.env.DB_NAME}, Port: ${process.env.DB_PORT}`
);

module.exports = pool;
