var fs = require('fs')
var num_newlines = undefined

function print_newlines() {
    console.log(num_newlines)
}

function count_newlines(filename, printer) {
    fs.readFile(filename, function named_function(err, data) {
        var num_lines = data.toString().split('\n').length
        num_newlines = num_lines - 1
        printer()
    })
}

count_newlines(process.argv[2], print_newlines)
