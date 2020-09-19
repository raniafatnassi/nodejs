var http = require('http');

if(process.argv.length < 3) {
    console.log('Please specify an endpoint');
    return;
}

var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');
    
    response.on('error', function(err) {
        console.error(err);
    });
    
    response.on('data', function(data) {
        console.log(data);
    });
});

// to test we can type yrl as :
// http://jsonplaceholder.typicode.com/users