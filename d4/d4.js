const fs = require('fs');
var a1=fs.readFileSync('test.txt').toString().split`\r\n\r\n`;
var callings = a1[0].split(',');

// console.log(a1)
// console.log(callings)

var scores = [];

for (i = 1; i < a1.length; i++) {
  board = a1[i].split('\r\n');
  // console.log(board);
  for (j=0; j < board.length; j++) {
    board[j] = board[j].split(' ').filter(String);
  }
  // console.log(board)

  loop1:
    for (k = 0; k < callings.length; k++) {
      for (c = 0; c < board.length; c++) {
        if (new Set(board[c]).size == 1){
          console.log(k);
          scores.push(k)
          break loop1;
        }
      }
  loop2:
      for (l=0; l < board.length; l++) {
  loop3:
        for (m = 0; m < board[0].length; m++) {
          if (board[l][m] == callings[k]) {
            board[l][m] = 'X';
          }
        }
      }
    }
  }
w = a1[scores.indexOf(Math.min(...scores))].split('\r\n');
for (n = 0; n < w.length; n++) {
  w[n] = w[n].split(' ').filter(String);
}
console.log(w)
