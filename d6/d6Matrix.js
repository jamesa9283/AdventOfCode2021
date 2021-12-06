const fs = require('fs');
const math = require('mathjs');
var fish=fs.readFileSync('i.txt').toString().split`,`;

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}



const LeslieMatrix = math.matrix([
                      [0,1,0,0,0,0,0,0,0],
                      [0,0,1,0,0,0,0,0,0],
                      [0,0,0,1,0,0,0,0,0],
                      [0,0,0,0,1,0,0,0,0],
                      [0,0,0,0,0,1,0,0,0],
                      [0,0,0,0,0,0,1,0,0],
                      [1,0,0,0,0,0,0,1,0],
                      [0,0,0,0,0,0,0,0,1],
                      [1,0,0,0,0,0,0,0,0]
                    ]); // Matrix

var popul = [];

for (i = 0; i < 9; i++) {
  // console.log(i, fish[i])
  popul.push(getOccurrence(fish, i.toString()));
}

// console.log(popul)
var T = 256;

for (k = 0; k < T; k++) {
  popul = math.multiply(LeslieMatrix, popul)
}

console.log(math.sum(popul._data))
