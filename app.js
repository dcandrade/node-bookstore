var app = require("./config/express")();
var productRoutes = require("./app/routes/products")(app);

app.listen(3000, function(){
    console.log("Server online");
});