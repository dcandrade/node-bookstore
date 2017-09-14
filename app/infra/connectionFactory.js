module.exports = function(){
    return createDBConnection;
}

var createDBConnection = function(){
    var mysql = require("mysql");
    var env = process.env.NODE_ENV;
    
    if(!process.env.NODE_ENV || process.env.NODE_ENV == 'development'){
            return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bookstore_dev"
        });
    }

    if(process.env.NODE_ENV == 'production'){
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bookstore"
        });
    }
}
