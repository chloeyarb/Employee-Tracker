// Put all of our Queries
const connection = require('./connection');

// Creating class. Module 10

class DB {
    constructor(connection){
        this.connection=connection;
    }
    findDepartments(){
        return this.connection.promise().query(
            'SELECT * FROM department'
        )
    }
    findEmployees(){
        return this.connection.promise().query(
            'SELECT * FROM employee'
        )
    }
    findRoles(){
        return this.connection.promise().query(
            'SELECT * FROM role'
        )
    }
}

// Adds need parameters 

module.exports=new DB(connection);