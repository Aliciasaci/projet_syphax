const mysql = require("mysql");

// create the connection to database
const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = db;