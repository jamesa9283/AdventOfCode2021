const fs = require('fs')

var array = fs.readFileSync('./input.txt').toString().split("\n");
for (var i = 0; i < array.length; i++) {
  array[i] = array[i].replace('\r', '');
}
// console.log(array)

var addData = [];

for (var j = 0; j < array.length - 2; j++) {
  //console.log(array[j]);
  addData.push(parseInt(array[j])+parseInt(array[j+1])+parseInt(array[j+2]));
}
console.log(addData);

var counter = 0;
for (var j = 0; j < addData.length; j++) {
  if (addData[j-1] < addData[j]) {counter = counter + 1; }
}
console.log(counter);
