module.exports = function(app){
    var listProducts = function(request, response){
        var connection = app.infra.connectionFactory();
        var productsDAL = new app.infra.ProductsDAO(connection);

        productsDAL.list(function(error, result){
            response.render("products/list", {
                books: result
            });
        });

        connection.end();
    };

    app.get("/products", listProducts);

    app.get("/products/form", function(request, response){
        response.render("products/form");
    });

    app.post("/products", function(request, response){
        var product = request.body;

        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);
        
        productsDAO.insert(product, function(error, result){
            response.redirect("/products");
        });

        connection.end();
    });
}
