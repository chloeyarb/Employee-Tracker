const inquirer = require('inquire');
const mysql = require('mysql2');
const { exit } = require('process');
const db = require('./db');

require('console.table');

// series of inquirer prompts. list of questions. based on answer send to function
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
                'Add Departments',
                'Add Employees', 
                'Add Roles',
                'Exit']
        }
    ])
    .then((data) => {
        switch(data.directory){
            case 'View Departments':
                viewAllDepartments();
                break;   
                // insert the other options
            default:
                exit();        
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

const exit = function(){
    process.exit();
}

init();