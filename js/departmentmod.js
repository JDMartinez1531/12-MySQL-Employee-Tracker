const connection = require("./connection");
const cTable = require("console.table");

function viewDepartments() {
	connection.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;
		console.table(res);
		connection.end();
	});
}

function getDepartmentList() {
    return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            deptListArray = [];
            for (var i = 0; i < res.length; i++) {
                deptListArray.push(res[i]);
            }
    
            resolve(deptListArray);
        });
    })
}


function addDepartment(deptNameInput) {
	connection.query(
		"INSERT INTO department (name) VALUES ('" + deptNameInput.department + "')",
		function (err) {
			if (err) throw err;
			viewDepartments();
		}
	);
}

module.exports = { viewDepartments, addDepartment, getDepartmentList };
