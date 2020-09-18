var fs = require('fs');

fs.readFile('input.txt', function(err, data){
    if(err){
        console.error(err);
    } else
    {   var input = data.toString();
        var dataArr = input.split('\n');
        console.log('Nous avons ' + (dataArr.length-1) + ' retour(s) à la ligne');
    }
});


