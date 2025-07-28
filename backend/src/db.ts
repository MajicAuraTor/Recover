require('dotenv').config(); // Load environment variables from .env file
const mysql = require('mysql2');

//this looks similar to a route
export const db = mysql.createPool({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

interface MysqlError extends Error {
    code?: string;
    errno?: number;
    sqlState?: string;
    sqlMessage?: string;
} // Define the MysqlError interface to match the MySQL error structure

interface ConnectCallback {
    (err: MysqlError | null): void;
}

// connection.connect((err: MysqlError | null) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database!');
// });

// module.exports = connection;

