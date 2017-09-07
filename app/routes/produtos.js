module.exports = function(app){
    app.get('/produtos', function(request, response){
        console.log("Listing products...")
        response.render("produtos/lista");
    });
}
