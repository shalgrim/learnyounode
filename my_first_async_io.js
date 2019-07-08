var fs = require('fs')

var txt = fs.readFile(process.argv[2], function(err, data) {
    return data.toString()
})

var num_lines = txt.split('\n')
var num_newlines = num_lines.length - 1

console.log(num_newlines)
