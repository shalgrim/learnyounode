var http = require('http');
var bl = require('bl');

url1 = process.argv[2]
url2 = process.argv[3]
url3 = process.argv[4]

print_data= function(err, data) {
    if (err) {
        return console.error(err);
    }

    var sdata = data.toString();
    console.log(sdata);
}

pipe_and_print = function(response) {
    response.pipe(bl(print_length_and_data));
}

var responses_stored = 0;
var s1 = '';
var s2 = '';
var s3 = '';

maybe_print = function() {
    if (responses_stored == 3) {
        console.log(s1);
        console.log(s2);
        console.log(s3);
    }
}

store_one = function(err, data) {
    if (err) {
        return console.error(err);
    }

    s1 = data.toString();
    responses_stored++;
    maybe_print();
}

pipe_and_store_one = function(response) {
    response.pipe(bl(store_one));
}

store_two = function(err, data) {
    if (err) {
        return console.error(err);
    }

    s2 = data.toString();
    responses_stored++;
    maybe_print();
}

pipe_and_store_two = function(response) {
    response.pipe(bl(store_two));
}

store_three = function(err, data) {
    if (err) {
        return console.error(err);
    }

    s3 = data.toString();
    responses_stored++;
    maybe_print();
}

pipe_and_store_three = function(response) {
    response.pipe(bl(store_three));
}

http.get(url1, pipe_and_store_one);
http.get(url2, pipe_and_store_two);
http.get(url3, pipe_and_store_three);
