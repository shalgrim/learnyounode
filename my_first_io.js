var fs = require('fs')

var txt = fs.readFileSync(process.argv[2]).toString()
var num_lines = txt.split('\n')
var num_newlines = num_lines.length - 1

console.log(num_newlines)
