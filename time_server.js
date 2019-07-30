var net = require('net');
var strftime = require('strftime');

connection_listener = function(socket) {
    socket.end(strftime('%Y-%m-%d %H:%M\n'))
}

var server = net.createServer(connection_listener);
server.listen(process.argv[2]);
