module.exports = function(app){
    app.get('/', function(request, response){
        var connection = app.infra.connectionFactory();
        var productsDAL = new app.infra.ProductsDAO(connection);

        productsDAL.list(function(error, result){
            response.render('home/index', {
                books: result
            })
        });

        connection.end();
    });
}