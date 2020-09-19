var fs = require('fs');

input = process.argv[2];

var inputFile = fs.readFileSync(input);
var str = inputFile.toString();
var strArray = str.split('\n');
console.log(strArray.length-1);

