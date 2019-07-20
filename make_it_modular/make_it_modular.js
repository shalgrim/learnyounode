var mymodule = require('./mymodule.js')

function print_matches(err, data) {
    if (err) {
        return console.err('There was an error:', err);
    }
    data.forEach(function(value) {
        console.log(value);
    });
}

mymodule(process.argv[2], process.argv[3], print_matches);
