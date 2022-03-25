// Put all of our Queries
const connection = require('./connection');

// Creating class

class DB {
    constructor(connection){
        this.connection=connection;
    }
    findDepartments(){
        return this.connection.promise().query(
            'SELECT * FROM deparment'
        )
    }
}

module.exports=new DB(connection);