const fs = require('fs')
var a1=fs.readFileSync('i.txt').toString().replace('\r','').split`\n`;
var a2=['forward','up','down'];
for(var k=a2.length;k--;){eval('var '+a2[k]+'=0');
for(var j=a1.length;j--;){var a3=a1[j].toString().split` `;
if(a3[0]==a2[k]){eval(a2[k]+'='+a2[k]+'+parseInt(a3[1])')}}}
console.log(forward*(down-up))
