//package dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// TODO: connect to sql database
const connection = mysql.createConnection({
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

// Function to start initial prompts
function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "firstPrompt",
            message: "What would you like to do?",
            choices: ["View departments", "View roles", "View employees", "Add department", "Add employee role", "Add employee", "Update departments", "Update roles", "Update employees", "Exit"]
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

            case "Add department":
                addDepartment();
                break;

            case "Add employee role":
                addEmployeeRole();
                break;

            case "Add employee":
                addEmployee();
                break;

            default:
                break;
        }
    })
}

// Prompts to VIEW tables
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

// Prompts to ADD table data
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the department name?"
        },
    ])
    .then((response) => {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: response.departmentName,
            },
            (err, results) => {
                if (err) throw err;
                console.log(`${response.departmentName} added to departments.`);
                start();
            }
        );
    })
};

function addEmployeeRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the employee title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What department is this role in?"
            //choices: display array of depts
        },
    ])
    .then((response) => {
        connection.query(
            "INSERT INTO employeeRole SET ?",
            {
                title: response.title,
                salary: response.salary,
                department_id: response.department_id
            },
            (err, results) => {
                if (err) throw err;
                console.log(`${response.title} added to employee roles.`);
                start();
            }
        );
    })
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's role id?"
            //choices: display array of role ids???
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the employee's manager id?"
            //choices: display array of manager ids???
        },
    ])
    .then((response) => {
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: response.first_name,
                last_name: response.last_name,
                role_id: response.role_id,
                manager_id: response.manager_id
            },
            (err, results) => {
                if (err) throw err;
                console.log(`${response.departmentName} added to departments.`);
                start();
            }
        );
    })
};

// TODO: Prompts to UPDATE table data

// TODO: connect to server and database
connection.connect((err) => {
    if (err) throw err;
    start();
  });







// ---------------------------------------------------------------------

// TODO: ??? SQL JOINS ???
// TODO: SQL queries/constructor functions/classes
