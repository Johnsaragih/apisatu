const mysql = require("mysql");
const dbconfig = require("../config/dbconfig.js");

var connection = mysql.createPool({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.password,
    database:dbconfig.DB

});


module.exports = connection;