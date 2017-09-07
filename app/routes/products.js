module.exports = function(app){
    app.get("/products", function(request, response){
        var connection = app.infra.connectionFactory();

        connection.query("SELECT * FROM products", function(error, result){
            response.render("products/list", {
                books: result
            });
        });

        connection.end();
        //response.render("produtos/lista");
    });
}
