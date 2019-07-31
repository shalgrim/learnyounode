var fs = require('fs');
var http = require('http');

var listen_port = process.argv[2];
var file_loc = process.argv[3];

callback = function(request, response) {
    var stream = fs.createReadStream(file_loc);
    stream.pipe(response);
}

var server = http.createServer(callback);
server.listen(listen_port);
