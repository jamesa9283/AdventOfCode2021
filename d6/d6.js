const fs = require('fs');
var fish=fs.readFileSync('i.txt').toString().split`,`; // takes in data and put it into an array

var T = 80;


pI = parseInt;

for (i = 0; i < T; i++) {
  if (fish.includes(0)) {
    while(fish.indexOf(0) != -1) { fish.splice(fish.indexOf(0), 1, 7); fish.push(9);}
  }
  var fish = fish.map( function(value) {
      return value - 1;
  } );
  console.log('Day: ' + i)
}

console.log(fish.length)


