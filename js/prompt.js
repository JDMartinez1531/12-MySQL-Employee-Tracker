const inquirer = require("inquirer");

const mainMenu = [
    {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "View Employees by Manager",
            "View Department Utilized Budget",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Existing Employee's Role",
            "Update Employee's Manager",
            "Delete Department",
            "Delete Role",
            "Delete Employee"
        ]
    }
]