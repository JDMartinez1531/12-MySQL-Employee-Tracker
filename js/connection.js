const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Password12345",
	database: "lorem_ipsum_inc",
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;