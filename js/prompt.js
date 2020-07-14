const inquirer = require("inquirer");
const Role = require("./constructors/role");
const {
	viewDepartments,
	addDepartment,
	getDepartmentList,
} = require("./departmentmod");
const { viewRoles } = require("./rolemod");
const { viewEmployees, viewEmployeesByManager ,addEmployee } = require("./employeemod");

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
		message: "Enter Manager ID",
	},
];

function getdepartment() {
	inquirer
		.prompt({
			message: "Please enter the department name",
			type: "input",
			name: "department",
		})
		.then(function (answer) {
			addDepartment(answer);
		});
}

function getRole() {
	// var deptList = getDepartmentList();
	inquirer.prompt([
		{
			type: "input",
			name: "role",
			message: "Please enter title of new role",
		},
		{
			type: "input",
			name: "salary",
			message: "Please enter salary for this role",
		},
		{
			type: "list",
			name: "dept",
			message: "Please select department to assign this role",
			choices: getDepartmentList(),
		},
	]);
}

function getEmployee() {
	inquirer.prompt([
		{
			type: "input",
			name: "firstName",
			message: "Please enter new employee's first name",
		},
		{
			type: "input",
			name: "lastName",
			message: "Please enter new employee's last name",
		},
		{
			type: "input",
			name: "roleId",
			message: "Please enter new employee role ID"
		},
		{
			type: "input",
			name: "managerId",
			message: "Please enter the ID of new employee's manager. (leave field blank if new employee is a manager",
			default: null
		}
	])
	.then(answer => {
		addEmployee(answer)
	})
}

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
			case "Add Department":
				getdepartment();
				break;
			case "Add Role":
				getRole();
				break;
			case "Add Employee":
				getEmployee();
				break;
		}
	});
}

module.exports = { showMain };
