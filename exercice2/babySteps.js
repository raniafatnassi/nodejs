var sum = 0

// Start at second argument because first two commandline arguments are :
//  'node' and 'babySteps.js'
var input = process.argv;

for (var i=2; i< input.length; i++){
    sum += Number(input[i]);
}

console.log(sum);