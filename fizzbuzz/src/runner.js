var fizzbuzz = require('./fizzbuzz')

console.log(process.argv);

var min = process.argv[2];
var max = process.argv[3];

console.log(fizzbuzz.run( min == null ? 1 : min , max == null ? 100 : max));
