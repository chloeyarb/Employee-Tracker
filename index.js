const inquirer = require('inquirer');
const mysql = require('mysql2');
const { exit } = require('process');
const db = require('./db');
const consoleTable = require('console.table');

console.table(
    "\n------------- WELCOME TO EMPLOYEE TRACKER -------------\n"
)

// Series of inquirer prompts. Initial list of options. Based on answer send to function
const init = function(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: [
                'View Departments',
                'View Employyes',
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
            // default:
            //     exit();        
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

// // const exit = function(){
//     process.exit();
// }

init();