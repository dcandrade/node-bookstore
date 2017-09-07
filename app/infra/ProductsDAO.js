function ProductsDAO(dbConnection){
    this._dbConnection = dbConnection;
}

ProductsDAO.prototype.list = function(callback){
    this._dbConnection.query("SELECT * FROM products", callback);
}

module.exports = function(){
   return ProductsDAO;
}
