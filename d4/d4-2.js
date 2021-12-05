const fs = require('fs');
var a1=fs.readFileSync('test.txt').toString().split`\r\n\r\n`; // takes in data and put it into an array
var callings = a1[0].split(','); // takes the callings out
a1.shift();
for (i=0; i < a1.length; i++) {
  a1[i] = a1[i].split(/(?:\r\n| )+/).filter(String);
}

var i=0;
for (m=0; m<callings.length;m++) {
  for (j = 0; j < a1.length;j++) {
    for (k = 0; k < a1[0].length; k++) {
      a1[i][j][k] = 'X'
    }
  }

}

console.log(a1)