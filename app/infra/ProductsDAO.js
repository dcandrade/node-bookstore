function ProductsDAO(dbConnection){
    this._dbConnection = dbConnection;
}

ProductsDAO.prototype.list = function(callback){
    this._dbConnection.query("SELECT * FROM products", callback);
}

ProductsDAO.prototype.insert = function(product, callback){
    this._dbConnection.query("INSERT INTO products SET ?", product, callback);
}

module.exports = function(){
   return ProductsDAO;
}
