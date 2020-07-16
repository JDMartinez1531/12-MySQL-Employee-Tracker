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

module.exports = {viewEmployees, viewEmployeesByManager, addEmployee};