const inquirer = require("inquirer");
const Role = require("./constructors/role");
const Employee = require("./constructors/employee");
const {
	viewDepartments,
	addDepartment,
	getDepartmentList,
} = require("./departmentmod");
const {
	viewRoles,
	createRole,
	returnDepartmentIdForRole,
} = require("./rolemod");
const {
	viewEmployees,
	viewEmployeesByManager,
	addEmployee,
} = require("./employeemod");

const mainMenu = [
	{
		type: "list",
		name: "main",
		message: "What would you like to do?",
		choices: [
			"View Departments",
			"View Roles",
			"View Employees",
			"Add Department",
			"Add Role",
			"Add Employee",
			"Update Existing Employee's Role",
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
// defines role data
function getRole() {
	getDepartmentList().then((data) => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "title",
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
					choices: data,
				},
			])

			.then((answers) => {
				returnDepartmentIdForRole(answers.dept).then((departmentId) => {
					const role = new Role(answers.title, answers.salary, departmentId);
					createRole(role);
				});
			});
	});
}

function getEmployee() {
	inquirer
		.prompt([
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
				message: "Please enter new employee's role ID",
			},
			{
				type: "input",
				name: "managerId",
				message:
					"Please enter the ID of new employee's manager. (leave field blank if new employee is a manager",
				default: null,
			},
		])
		.then((answer) => {
			const employee = new Employee(answer.firstName, answer.lastName, answer.roleId, answer.managerId)
			addEmployee(employee);
		});
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
