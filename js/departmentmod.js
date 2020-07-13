const connection = require("./connection");
const cTable = require('console.table');

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
}


module.exports = {viewDepartments}