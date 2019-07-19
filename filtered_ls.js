var fs = require('fs')
var path = require('path')

function print_matches(err, listing) {
    listing.forEach(function(value){
        // console.log(value);
        // console.log(path.extname(value));
        // console.log('.' + process.argv[3]);
        if (path.extname(value) == '.' + process.argv[3]) {
            console.log(value);
        }
    });
}

function filtered_ls(dirname) {
    fs.readdir(dirname, print_matches)
}

filtered_ls(process.argv[2])
