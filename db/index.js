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
            'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id'
        )
    }
    findRoles(){
        // do a left join
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
            'INSERT INTO employee SET ?', answers 
        );
    }
    addNewRole(answers){
        return this.connection.promise().query(
            'INSERT INTO role SET ?', answers 
        );
    }
    updateEmployeeRole(employeeId, roleId){
        return this.connection.promise().query(
            'UPDATE employee SET role_id = ? WHERE id = ?', 
            [roleId, employeeId]
        )
    }
} 



module.exports=new DB(connection);