const connection = require("./connection");
const cTable = require('console.table');

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
}

function viewEmployeesByManager (mId){
    connection.query(`SELECT * FROM employee WHERE manager_id = ${mId}`, function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
}

function addEmployee (employee){
    connection.query("INSERT INTO employee SET ?", employee, function (err, res){
        if (err) throw err;
        viewEmployees();
    })
}

function updateEmployeeRole (newData) {
    const {empId, newRoleId} = newData;
    connection.query(`UPDATE employee SET role_id = ${newRoleId} WHERE id = ${empId}`, function (err, res){
        if (err) throw err;
        viewEmployees();
    })
}

module.exports = {viewEmployees, viewEmployeesByManager, addEmployee, updateEmployeeRole};