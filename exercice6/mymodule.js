var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
    ext = '.' + ext;

    fs.readdir(dirname, function (err, files) {
        if(err) {
            return callback(err)
        };

        var filteredList = [];
        files.forEach(function(file) {   
            if(path.extname(file) === ext)
            filteredList.push(file);
        });
        return callback(null, filteredList);
    });
};