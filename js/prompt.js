const inquirer = require("inquirer");
const { viewDepartments } = require("./departmentmod");
const { viewRoles } = require("./rolemod");
const { viewEmployees, viewEmployeesByManager } = require("./employeemod");

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
			"Delete Employee",
		],
	},
];

const selectManagerId = [
	{
		type: "input",
		name: "managerId",
		message: "Enter Manager ID"
	}
]

function showMain() {
        inquirer.prompt(mainMenu).then((answers) => {
		switch (answers.main) {
			case "View Departments":
				console.log(answers.main);
                viewDepartments();
                break;
			case "View Roles":
				viewRoles();
				break;
			case "View Employees":
				viewEmployees();
				break;
			case "View Employees by Manager":
				viewEmployeesByManager();
				break;
			case "View Department Utilized Budget":
                viewDepartmentBudget();
                break;
        }
    
	});
};



module.exports = { showMain };
