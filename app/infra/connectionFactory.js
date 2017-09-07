module.exports = function(){
    return createDBConnection;
}

var createDBConnection = function(){
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "bookstore"
    });

    return connection;
}
