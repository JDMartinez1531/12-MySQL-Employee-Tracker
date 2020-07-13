const connection = require("./connection");
const cTable = require('console.table');

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
}


module.exports = {viewRoles}