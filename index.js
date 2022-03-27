const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db');
const consoleTable = require('console.table');

console.table(
    "\n------------- WELCOME TO EMPLOYEE TRACKER -------------\n"
)

// Series of inquirer prompts. Initial list of options for what user can do. Based on answer send to function
const init = function(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: [
                'View Departments',
                'View Employees',
                'View Roles',
                'Add Department',
                'Add Employee', 
                'Add Role',
                'Update Employee Role',
                'Exit']
        }
    ])
    .then((data) => {
        switch(data.directory){
            case 'View Departments':
                viewAllDepartments();
                break;   

            case 'View Employees':
                viewAllEmployees();
                break;
                
            case 'View Roles':
                viewAllRoles();
                break;
                
            case 'Add Department':
                addNewDepartment();
                break;
                
            case 'Add Employee':
                addNewEmployee();
                break;
                
            case 'Add Role':
                addNewRole();
                break;  

            case 'Update Employee Role':
                updateEmployee();
                break;
                
            case 'Exit':
                process.exit();   

            default:
                process.exit();        
        }
    })
}

const viewAllDepartments = function(){
    db.findDepartments().then(([department]) =>{
        console.table(department);
    })
    .then(() =>{
        init();
    })
}
const viewAllEmployees = function(){
    db.findEmployees().then(([employee]) =>{
        console.table(employee);
    })
    .then(() =>{
        init();
    })
}
const viewAllRoles = function(){
    db.findRoles().then(([role]) =>{
        console.table(role);
    })
    .then(() =>{
        init();
    })
}
const addNewDepartment = function(){
    inquirer.prompt([
        {
            type:'input',
            name: 'departmentName',
            message: 'What is the name of the new department?',
        }
    ])
    .then((answers) =>{
        console.log(answers)
        db.addDepartment(answers)
        .then(init());
    })
    
}
const addNewEmployee = function(){
    inquirer.prompt([
        {
            type:'input',
            name: 'firstName',
            message: 'What is the first name of the new employee?',
        },
        {
            type:'input',
            name: 'lastName',
            message: 'What is the last name of the new employee?',
        } 
    ])
    .then( answers => {
        const first = answers.first_name;
        const last = answers.last_name;
        
        db.findRoles().then(([role]) =>{
            const roles = role;
            const listRoles = roles.map(({ id, title}) => ({
                name: title,
                value: id
            }))
            
            inquirer.prompt([
                {
                    type:'list',
                    name: 'employeeRoleId',
                    message: 'What is the role of this employee?',
                    choices: listRoles
                    
                }
            ])
            .then((answers) =>{
                console.log(answers)
                db.addNewEmployee(answers)
                // .then(init());
            })
        })
        db.addNewEmployee(answers)
        .then(init());
    })
}

init();