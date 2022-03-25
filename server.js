const inquirer = require('inquire');
const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.port || 3001;

const app = express();

// Middleware 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


// Starts the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});