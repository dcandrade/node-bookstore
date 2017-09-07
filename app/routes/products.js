module.exports = function(app){
    app.get("/products", function(request, response){
        var connection = app.infra.connectionFactory();
        var productsDAL = new app.infra.ProductsDAO(connection);

        productsDAL.list(function(error, result){
            response.render("products/list", {
                books: result
            });
        });

        connection.end();
        //response.render("produtos/lista");
    });
}
