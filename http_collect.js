var http = require('http');
var bl = require('bl');

url = process.argv[2]

print_length_and_data = function(err, data) {
    if (err) {
        return console.error(err);
    }

    var sdata = data.toString();
    console.log(sdata.length);
    console.log(sdata);
}

pipe_and_print = function(response) {
    response.pipe(bl(print_length_and_data));
}

http.get(url, pipe_and_print);
