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
    addDepartment(answers){
        return this.connection.promise().query(
            'INSERT INTO department SET ?', {
                name: answers.departmentName
            } 
        );
    }
    addNewEmployee(answers){
        return this.connection.promise().query(
            'INSERT INTO employee SET ?', {
                first_name: answers.firstName,
                last_name: answers.lastName, 
                role_id: answers.employeeRoleId,
                // manager_id: 'null'
            } 
        );
    }
} 



module.exports=new DB(connection);