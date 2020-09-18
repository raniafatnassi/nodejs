var fs = require('fs');

var inputFile = fs.readFileSync('input.txt');
var str = inputFile.toString();
var strArray = str.split('\n');
console.log('We have ' + (strArray.length-1) + ' new line(s) in the input file');

