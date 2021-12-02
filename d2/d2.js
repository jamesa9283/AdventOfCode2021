const fs = require('fs')

var array = fs.readFileSync('./input.txt').toString().split("\n");
for (var i = 0; i < array.length; i++) {
  array[i] = array[i].replace('\r', '');
}
array.pop()

up = 0;
across = 0;

for (var j = 0; j < array.length; j++) {
  if (array[j].toString().split(" ")[0] == 'forward')
    {across = across + parseInt(array[j].toString().split(" ")[1]);}
  if (array[j].toString().split(" ")[0] == 'up')
    {up = up - parseInt(array[j].toString().split(" ")[1]);}
  if (array[j].toString().split(" ")[0] == 'down')
    {up = up + parseInt(array[j].toString().split(" ")[1])}
}
console.log(up * across)
