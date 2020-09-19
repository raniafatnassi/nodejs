var myModule = require('./myModule');

var directory = process.argv[2];
var ext = process.argv[3];

myModule(directory, ext, function (err, files) {
    if(err){
        return console.error(err);
    };

    files.forEach(file => {
        console.log(file);
    });
})