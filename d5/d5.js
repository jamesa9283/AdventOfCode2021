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

// console.log(a1)
for (i=0; i < a1.length; i++) {
  line = a1[i].split(' -> ');
  if (line[0].split(',')[0] == line[1].split(',')[0]) {
    lines.push([line[0].split(','), line[1].split(',')]);
    if (line[0].split(',')[1] < line[1].split(',')[1]) {
      var j = line[1].split(',')[1] - line[0].split(',')[1];
      // console.log(j)
      for(k = 0; k < j+1; k++) {
        points.push([line[0].split(',')[0], (parseInt(line[0].split(',')[1]) + k).toString()]);
      }
    }
    if (line[1].split(',')[1] < line[0].split(',')[1]) {
      var j = line[0].split(',')[1] - line[1].split(',')[1];
      // console.log(j)
      for(k = 0; k < j+1; k++) {
        points.push([line[0].split(',')[0], (parseInt(line[1].split(',')[1]) + k).toString()]);
      }
    }
  }
  if (line[0].split(',')[1] == line[1].split(',')[1]) {
    lines.push([line[0].split(','), line[1].split(',')]);
    if (line[0].split(',')[0] < line[1].split(',')[0]) {
      var j = line[1].split(',')[0] - line[0].split(',')[0];
      // console.log(j)
      for(k = 0; k < j+1; k++) {
        points.push([(parseInt(line[0].split(',')[0]) + k).toString(), line[0].split(',')[1]]);
      }
    }
    if (line[1].split(',')[0] < line[0].split(',')[0]) {
      var j = line[0].split(',')[0] - line[1].split(',')[0];
      // console.log(j)
      for(k = 0; k < j+1; k++) {
        points.push([(parseInt(line[1].split(',')[0]) + k).toString(), line[0].split(',')[1]]);
      }
    }
  }
}

console.log('score time')
console.log(points)

var score = 0;

loop1 : for (l=0; l < points.length; l++) {
  for (m = l; m < points.length; m++) {
    if (m != l && ArrayEqual(points[m], points[l])) {
      score = score + 1
      break;
    }
  }
}

// console.log(points)
// console.log(lines)
// console.log(points[0])
// console.log(points[20])
console.log(ArrayEqual(points[0], points[20]))
console.log(score)