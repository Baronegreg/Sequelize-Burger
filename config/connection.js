//Vanilla MySql connection
//======================================================================================
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });
//=======================================================================================
//Sequelize Connection
var Sequelize = require("sequelize");

var connection = new Sequelize("burgers_db", "root", "root");


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

module.exports = connection;
