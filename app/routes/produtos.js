module.exports = function(app){
    app.get("/produtos", function(request, response){
        var mysql = require("mysql");
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bookstore"
        });

        connection.query("SELECT * FROM books", function(error, result){
            response.send(error + " "+ result);
        });

        connection.end();
        //response.render("produtos/lista");
    });
}
