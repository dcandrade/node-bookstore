module.exports = function(app){
    app.get("/produtos", function(request, response){
        var mysql = require("mysql");
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bookstore"
        });

        connection.query("SELECT * FROM products", function(error, result){
            console.log(error);
            response.send(result);
            //response.render("products/list");
        });

        connection.end();
        //response.render("produtos/lista");
    });
}
