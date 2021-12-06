const fs = require('fs');
var a1=fs.readFileSync('test.txt').toString().split`\r\n`; // takes in data and put it into an array

function displayBoard(board, n) {
  var boardOut = '';
  // return board.flat()
  for (i = 0; i < board.length-1; i++) {
    boardOut = boardOut + (board[i].toString().replace(/,/g, '').replace(/0/g, '.')) + '\r\n'
  }
  return boardOut
}

function sign(num) {
  if (num < 0) { return -1}
  else { return 1}
}

var lines = [];
var points = [];

pts = [];

pI = parseInt
// console.log(a1)
for (i=0; i < a1.length; i++) {
  line = a1[i].split(' -> ');
  pts.push(line[0].split(','), line[1].split(','));
  lines.push([(line[0].split(',')), (line[1].split(','))]);
}
console.log(lines)
// console.log(pts.flat())
// console.log(Math.max(...pts.flat()))

var value = 0; // by default
var board = [...Array(1 + Math.max(...pts.flat()))].map(e => Array(1 + Math.max(...pts.flat())).fill(value));
// console.log(board)

for (i = 0; i < lines.length; i++) {
  // console.log(lines[i][0])
  // console.log(lines[i][j][0], lines[i][j][1])
  if (Math.sqrt(lines[i][0][0]**2 + lines[i][0][1]**2) <= Math.sqrt(lines[i][1][0]**2 + lines[i][1][1]**2))
   { var x0 = pI(lines[i][0][0]); var x1 = pI(lines[i][1][0]); var y0 = pI(lines[i][0][1]); var y1 = pI(lines[i][1][1])}
  if (Math.sqrt(lines[i][1][0]**2 + lines[i][1][1]**2) <= Math.sqrt(lines[i][0][0]**2 + lines[i][0][1]**2))
   { var x0 = pI(lines[i][1][0]); var x1 = pI(lines[i][0][0]); var y0 = pI(lines[i][1][1]); var y1 = pI(lines[i][0][1])}
  console.log(x0, y0, x1, y1)
  // console.log(displayBoard(board, 1 + Math.max(...pts.flat())));
  if (x0 == x1 || y0 == y1) {
    for (k=x0; k <= x1; k++) {
      for (l=y0; l <= y1; l++ ) {
        // console.log(k, l);
        board[k][l] = board[k][l] + 1;
        // console.log(k, l)
      }
    }
  } else {

    for (n = 0; n < (x1 - x0)+1; n++) {
      console.log(x0 + n, y0+n);
      board[x0 + sign(x1 - x0) * n][y0 + sign(y1 - y0) * n] = board[x0 + sign(x1 - x0) * n][y0 + sign(y1 - y0) * n] + 1;
      //console.log(displayBoard(board, 1 + Math.max(...pts.flat())));
    }
  }
}

var score = 0;

for (i = 0; i < board.length; i++) {
  for (j = 0; j < board[0].length; j++)
  if (board[i][j] > 1) {
    score = score + 1
  }
}

console.log(displayBoard(board, 1 + Math.max(...pts.flat())))
console.log(score)
