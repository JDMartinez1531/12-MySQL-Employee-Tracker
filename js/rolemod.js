const connection = require("./connection");
const cTable = require("console.table");

function viewRoles() {
	connection.query(
		"SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id",
		function (err, res) {
			if (err) throw err;
			console.table(res);
			connection.end();
		}
	);
}

function createRole(roleData) {
	connection.query("INSERT INTO role SET ?", roleData, function (err, res) {
		if (err) throw err;
		viewRoles();
	});
}

function returnDepartmentIdForRole(department) {
	return new Promise((resolve, reject) => {
		connection.query(
			`SELECT id FROM department WHERE name = "${department}"`,
			function (err, res) {
				if (err) {
					throw err;
				} else {
					var resObj = res[0];
                    const { id } = resObj;
                    resolve(id);
				}
				
			}
		);
	});
}

module.exports = { viewRoles, createRole, returnDepartmentIdForRole };
