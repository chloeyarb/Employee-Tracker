const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'tracker'
    },
    console.log('Connected to the election database.')
);

connection.connect(function(err) {
    if (err) throw err;
});

module.exports=connection;