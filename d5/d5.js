const fs = require('fs');
var a1=fs.readFileSync('test.txt').toString().split`\r\n`; // takes in data and put it into an array

var lines = [];
var points = [];

function ArrayEqual(arr1, arr2) {
  for (a=0; a < arr1.length; a++) {
      if (arr1[a] != arr2[a]) { return false}
  }
  return true
}

pI = parseInt
// console.log(a1)
for (i=0; i < a1.length; i++) {
  line = a1[i].split(' -> ');
  if (line[0].split(',')[0] == line[1].split(',')[0]) {
    lines.push([(line[0].split(',')), (line[1].split(','))]);
  }
  if (line[0].split(',')[1] == line[1].split(',')[1]) {
    lines.push([(line[0].split(',')), (line[1].split(','))]);
  }
}
console.log(lines)

var score = 0;

for (i = 0; i < lines.length; i++) {
  console.log('l1: ' + lines[i]);
  var x0 = pI(lines[i][0][0]); y0 = pI(lines[i][0][1]); x1 = pI(lines[i][1][0]); y1 = pI(lines[i][1][1]);
  var m = (y1 - y0)/(x1 - x0);
  console.log(m);
  for (j = i+1; j < lines.length; j++) {
    var x0Bar = lines[j][0][0]; y0Bar = lines[j][0][1]; x1Bar = lines[j][1][0]; y1Bar = lines[j][1][1];
    console.log('l2: ' + lines[j]);
    var mBar = (y1Bar - y0Bar)/(x1Bar - x0Bar);
    var x = (y0 - y0Bar - m * x0 + mBar * x0Bar)/(mBar - m);
    var y = y0 + m * (x - x0);
    if ((!isFinite(m) && Math.abs(mBar) == 0)) {
      if (((x0Bar <= x0 && x0 <= x1Bar) && (y0Bar <= y0 && y0 <= y1Bar)) || (x1Bar <= x0 && x0 <= x0Bar) && (y1Bar <= y0 && y0 <= y0Bar)) {
        score = score + 1;
        console.log('contacts')
      }
      // console.log('constant');
    }
    if (!isFinite(mBar) && Math.abs(m) == 0) {
      if ((x0 <= x0Bar && x0Bar <= x1) || (x1 <= x0Bar && x0Bar <= x0)) {
        score = score + 1;
        console.log('contact')
      }
      // console.log('constant');
    }
  }
}

console.log(score)
