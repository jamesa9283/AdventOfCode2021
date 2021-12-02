const fs = require('fs')
var array = fs.readFileSync('./input.txt').toString().replace('\r', '').split`\n`;
var up = forward = 0;
p = parseInt;
for (var j=array.length; j--; ) {
  var array2 = array[j].toString().split` `;
  if (array2[0] == 'forward')
    {forward = forward + p(array2[1]);}
  if (array2[0] == 'up')
    {up = up - p(array2[1]);}
  if (array2[0] == 'down')
    {up = up + p(array2[1])}
}
console.log(up * forward)
