const fs = require('fs');
var fish=fs.readFileSync('i.txt').toString().split`,`; // takes in data and put it into an array

var T = 80;


pI = parseInt;
for (i = 0; i < T; i++) {
  for (j = 0; j < fish.length; j++) {
    console.log(fish[j]);
    if (pI(fish[j]) == 0) {
      fish[j] = 6;
      fish.push(9);
      console.log('added new fish');
    } else {
      fish[j] = pI(fish[j]) - 1;
      console.log('else');
    }
  }
}
console.log(fish.length)