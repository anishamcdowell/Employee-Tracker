//package dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// TODO: connect to sql database

// TODO: inquirer prompts
function name() {
    inquirer.prompt([
        {
            type: "list",
            name: firstPrompt,
            message: "What would you like to do?",
            choices: ["View departments", "View roles", "View employees", "Add departments", "Add roles", "Add employees", "Update departments", "Update roles", "Update employees"]
        }
    ])

}
// add departments, roles, employees
// view departments, roles, employees
// update employee roles

// TODO: post employee data to sql database

// TODO: connect to server and database

// TODO: ??? SQL JOINS ???
// TODO: SQL queries/constructor functions/classes