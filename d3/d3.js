const fs = require('fs')
var a1=fs.readFileSync('i.txt').toString().replace('\r','').split`\n`;
var zeros = ones = 0;
var gamma = ''; var epsilon = '';
for (j=0; j<a1[0].replace('\r','').length; j++) {
  for(i = 0; i < a1.length - 1; i++) {
    if (a1[i].replace('\r','')[j] == '0') {
      zeros = zeros + 1;
    } else {ones = ones + 1;}
  }
  if (zeros < ones) {gamma = gamma.concat('1')}
  else {gamma = gamma.concat('0')}
  zeros = ones = 0;
}
console.log(parseInt(gamma, 2)*(2**gamma.length- 1 - parseInt(gamma, 2)))
