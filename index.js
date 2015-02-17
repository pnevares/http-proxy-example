var http = require('http');
var url = require('url');

var config = {
    port: 8080,
}

var server = http.createServer(function(serverRequest, serverResponse) {
    var destination = 'http://' + serverRequest.url.slice(1);

    console.log(destination);
    http.get(destination, function(clientResponse) {
        clientResponse.pipe(serverResponse);
    }).on('error', function(error) {
        console.log('clientResponse error: ' + error);
    });
});

server.listen(config.port, function() {
    console.log('listening on port %s', config.port);
});
