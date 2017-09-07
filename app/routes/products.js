module.exports = function(app){
    app.get("/products", function(request, response){
        var mysql = require("mysql");
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bookstore"
        });

        connection.query("SELECT * FROM products", function(error, result){
            response.render("products/list", {
                books: result
            });
        });

        connection.end();
        //response.render("produtos/lista");
    });
}
