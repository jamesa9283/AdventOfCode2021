const fs = require('fs');
var a1=fs.readFileSync('i.txt').toString().split`\r\n\r\n`; // takes in data and put it into an array
var callings = a1[0].split(','); // takes the callings out

function transpose(matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const grid = [];
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][j];
    }
  }
  return grid;
}

/**
  * This function takes in a board and plays through the calls until it reaches a point where the board is 'won'
  * @param {array} board [the bingo board]
  * @param {array} callings [the numbers called]
  * @return {array} board [the returned array]
**/
function mark(board, callings) {
  loop1:
    for (k = 0; k < callings.length; k++) {
      for (c = 0; c < board.length; c++) {
        if (new Set(board[c]).size == 1){
          // this bit of code checks whether there is a row is the same.
          scores.push(k);
          return board;
          break loop1;
        }
        if (new Set(transpose(board)[c]).size == 1) {
          // this bit of code checks whether there is a column is the same.
          scores.push(k);
          return board;
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



var scores = [];

for (i = 1; i < a1.length; i++) {
  board = a1[i].split('\r\n');
  for (j=0; j < board.length; j++) {
    board[j] = board[j].split(' ').filter(String);
  }
  //console.log(board);
  mark(board, callings)
  }


w = a1[scores.indexOf(Math.min(...scores)) + 1].split('\r\n').filter(String);
for (n = 0; n < w.length; n++) {
  w[n] = w[n].split(' ').filter(String);
}
// console.log(mark(w, callings));
M = mark(w, callings);
var score = 0;
for (s = 0; s < w.length; s++) {
  for (t = 0; t < w[0].length; t++) {
    // console.log(M[s][t])
    if (M[s][t] != 'X') {
      score = score + parseInt(M[s][t]);
    }
  }
}
//console.log(a1[scores.indexOf(Math.min(...scores)) + 1].split('\r\n').filter(String))
console.log(w)
console.log(score, callings[Math.min(...scores) - 1])
console.log(score * callings[Math.min(...scores) - 1])
