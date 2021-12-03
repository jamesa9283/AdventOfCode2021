const fs = require('fs')
var a1=fs.readFileSync('i.txt').toString().replace('\r','').split`\n`;
var nums = Array.apply(0, Array(a1.length-1)).map(function(_,b) {return b + 1})
//console.log(nums);


function mostCommon(arr, i) {
  var z = o = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[j][i] == '0') {z = z + 1}
    else {o = o + 1}
  }
  if (o < z) {return '0'} else {return '1'}
}

function leastCommon(arr, i) {
  var z = o = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[j][i] == '0') {z = z + 1}
    else {o = o + 1}
  }
  if (o < z) {return '1'} else {return '0'}
}

var l = a1[0].length;
for (var k=l;k--;){
  w = mostCommon(a1, l - 1 - k);
  for (var i=a1.length;i--;) {
    if (a1.length == 1) {break}
    // console.log(a1[i]);
    if (a1[i][l - 1- k] != w) {
      // console.log(a1[i][k]);
      a1.splice(a1.indexOf(a1[i]), 1)
    }
  }
}
var o2 = a1[0].toString()
console.log(o2)

var a1=fs.readFileSync('i.txt').toString().replace('\r','').split`\n`;

var l2 = a1[0].length;
for (var k=l2;k--;){
  w = leastCommon(a1, l2 - 1 - k);
  for (var i=a1.length;i--;) {
    if (a1.length == 1) { break}
    // console.log(a1[i]);
    if (a1[i][l2 - 1- k] != w) {
      // console.log(a1[i][k]);
      a1.splice(a1.indexOf(a1[i]), 1)
    }
  }
}
var co2 = a1[0].toString()
console.log(co2)

console.log(parseInt(o2, 2)*parseInt(co2, 2))
