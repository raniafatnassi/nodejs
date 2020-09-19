var fs = require('fs');

input = process.argv[2];

fs.readFile(input, function(err, data){
    if(err){
        console.error(err);
    } else
    {   var input = data.toString();
        var dataArr = input.split('\n');
        console.log(dataArr.length-1);
    }
});


