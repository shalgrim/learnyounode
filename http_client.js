var http = require('http')

do_something = function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) { console.log(data); });
}

url = process.argv[2]
http.get(url, do_something);
