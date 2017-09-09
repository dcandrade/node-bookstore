var http = require('http')

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    headers: {
        'Accept' : 'application/json',
    }
};

http.get(config, function(response){
    console.log("Status: " + response.statusCode);
    response.on('data', function(body){
        console.log("Response: " + body);
    })
});