var http = require('http')

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method: 'POST',
    headers: {
        'Accept' : 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(config, function(response){
    console.log("Status: " + response.statusCode);
    response.on('data', function(body){
        console.log("Response: " + body);
    })
});

var product = {
    title: 'Sample Book',
    description: 'Sample Description',
    price: '50.00'
};

client.end(JSON.stringify(product));