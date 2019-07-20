var fs = require('fs')
var path = require('path')

module.exports = function (dirname, ext, callback) {
    var filtered_listing = [];
    fs.readdir(dirname, function(err, listing) {
        if (err) {
            return callback(err);
        }

        listing.forEach(function(value){
            if (path.extname(value) == '.' + ext) {
                filtered_listing.push(value);
            }
        });

        callback(null, filtered_listing);
    });
}
