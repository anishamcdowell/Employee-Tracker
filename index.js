//package dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// TODO: connect to sql database
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'Hakurayn11!',
    database: 'employee_db',
  });

// TODO: inquirer prompts
function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "firstPrompt",
            message: "What would you like to do?",
            choices: ["View departments", "View roles", "View employees", "Add departments", "Add roles", "Add employees", "Update departments", "Update roles", "Update employees", "Exit"]
        }
    ]).then ((response) => {
        switch (response.firstPrompt) {
            case "View departments":
                viewDepartments();
                break;

            case "View roles":
                viewEmployeeRole();
                break;

            case "View employees":
                viewEmployees();
                break;

            default:
                break;
        }
    })
}

// Inquirer prompt functions
function viewDepartments() {
    connection.query(
        "SELECT * FROM department;",
        (err, results) => {
            if (err) throw err;
            console.table(results);
            start();
        }
    )
};

function viewEmployeeRole() {
    connection.query(
        "SELECT * FROM employeeRole;",
        (err, results) => {
            if (err) throw err;
            console.table(results);
            start();
        }
    )
};

function viewEmployees() {
    connection.query(
        "SELECT * FROM employee;",
        (err, results) => {
            if (err) throw err;
            console.table(results);
            start();
        }
    )
};

// add departments, roles, employees
// view departments, roles, employees
// update employee roles

// TODO: post employee data to sql database

// TODO: connect to server and database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

// TODO: ??? SQL JOINS ???
// TODO: SQL queries/constructor functions/classes
