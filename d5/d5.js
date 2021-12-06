const fs = require('fs');
var a1=fs.readFileSync('test.txt').toString().split`\r\n`; // takes in data and put it into an array

var lines = [];
var points = [];

pts = [];

pI = parseInt
// console.log(a1)
for (i=0; i < a1.length; i++) {
  line = a1[i].split(' -> ');
  if (line[0].split(',')[0] == line[1].split(',')[0]) {
    lines.push([(line[0].split(',')), (line[1].split(','))]);
    pts.push(line[0].split(','), line[1].split(','));
  }
  if (line[0].split(',')[1] == line[1].split(',')[1]) {
    lines.push([(line[0].split(',')), (line[1].split(','))]);
    pts.push((line[0].split(',')), (line[1].split(',')));
  }
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
  if (lines[i][0][0] - lines[i][1][0] <= 0) { var x0 = pI(lines[i][0][0]); var x1 = pI(lines[i][1][0])}
  if (lines[i][0][0] - lines[i][1][0] > 0) { var x1 = pI(lines[i][0][0]); var x0 = pI(lines[i][1][0])}
  if (lines[i][0][1] - lines[i][1][1] <= 0) { var y0 = pI(lines[i][0][1]); var y1 = pI(lines[i][1][1])}
  if (lines[i][0][1] - lines[i][1][1] > 0) { var y1 = pI(lines[i][0][1]); var y0 = pI(lines[i][1][1])}
  console.log(x0, y0, x1, y1)
  for (k=x0; k <= x1; k++) {
    console.log('yes')
    for (l=y0; l <= y1; l++ ) {
      console.log('Changed')
      board[k][l] = board[k][l] + 1;
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

console.log(board)
console.log(score)
