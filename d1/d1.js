const fs = require('fs')

var array = fs.readFileSync('./input.txt').toString().split("\n");
for (var i = 0; i < array.length; i++) {
  array[i] = array[i].replace('\r', '');
}
// console.log(array)

var counter = 0;
for (var j = 0; j < array.length; j++) {
  if (array[j-1] < array[j]) {counter = counter + 1; }
}
console.log(counter);
