const fs = require('fs')

var array = fs.readFileSync('i.txt').toString().replace('\r','').split`\n`;
array.pop()

up = 0;
across = 0;
aim = 0;

for (var j = 0; j < array.length; j++) {
  if (array[j].toString().split(" ")[0] == 'forward')
    { across = across + parseInt(array[j].toString().split(" ")[1]);
      up = up + aim * parseInt(array[j].toString().split(" ")[1]);}
  if (array[j].toString().split(" ")[0] == 'up')
    {aim = aim - parseInt(array[j].toString().split(" ")[1]);}
  if (array[j].toString().split(" ")[0] == 'down')
    {aim = aim + parseInt(array[j].toString().split(" ")[1])}
}
console.log(up * across)
