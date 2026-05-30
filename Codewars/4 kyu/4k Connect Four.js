//@ts-check

/**
 * @param {string[]} piecesPositionList
 * @returns {string}
 */
function whoIsWinner(piecesPositionList) {
  const cols = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  const colors = { Red: 1, Yellow: -1 };
  const board = Array.from({ length: 6 }, () => Array(7).fill(0));
  for (const move of piecesPositionList) {
    const [col, color] = move.split("_");
    let row = -1;
    for (row = board.length - 1; row >= 0; row--) {
      if (board[row][cols[col]] === 0) {
        board[row][cols[col]] = colors[color];
        break;
      }
    }
    if (checkFour(row, cols[col], board)) {
      return color;
    }
  }
  return "Draw";
} // whoIsWinner()

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} board
 * @returns {boolean}
 */
function checkFour(row, col, board) {
  const main = {
    "-2": [2, 0, 5, 3],
    "-1": [1, 0, 5, 4],
    0: [0, 0, 5, 5],
    1: [0, 1, 5, 6],
    2: [0, 2, 4, 6],
    3: [0, 3, 3, 6],
  };
  const sec = {
    3: [3, 0, 0, 3],
    4: [4, 0, 0, 4],
    5: [5, 0, 0, 5],
    6: [5, 1, 0, 6],
    7: [5, 2, 1, 6],
    8: [5, 3, 2, 6],
  };
  const lines = [board[row]];
  lines.push(board.map((e) => e[col]));
  const diff = col - row;
  if (diff in main) {
    const [sr, sc, er, ec] = main[diff];
    lines.push(
      Array.from({ length: er - sr + 1 }, (_, i) => board[sr + i][sc + i]),
    );
  }
  const sum = row + col;
  if (sum in sec) {
    const [sr, sc, er, ec] = sec[sum];
    lines.push(
      Array.from({ length: sr - er + 1 }, (_, i) => board[sr - i][sc + i]),
    );
  }
  for (const line of lines) {
    for (let i = 0; i < line.length - 3; i++) {
      if (line.slice(i, i + 4).every((e, _, a) => e && e === a[0])) {
        return true;
      }
    }
  }
  return false;
} // checkFour()

console.log(
  whoIsWinner([
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "G_Red",
    "B_Yellow",
  ]),
);
console.log(
  whoIsWinner([
    "C_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "D_Yellow",
    "B_Red",
    "B_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red",
  ]),
);
console.log(
  whoIsWinner([
    "A_Yellow",
    "B_Red",
    "B_Yellow",
    "C_Red",
    "G_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow",
  ]),
);
console.log(
  whoIsWinner(["A_Red", "B_Yellow", "A_Red", "E_Yellow", "F_Red", "G_Yellow"]),
);
console.log(
  whoIsWinner([
    "F_Yellow",
    "G_Red",
    "D_Yellow",
    "C_Red",
    "A_Yellow",
    "A_Red",
    "E_Yellow",
    "D_Red",
    "D_Yellow",
    "F_Red",
    "B_Yellow",
    "E_Red",
    "C_Yellow",
    "D_Red",
    "F_Yellow",
    "D_Red",
    "D_Yellow",
    "F_Red",
    "G_Yellow",
    "C_Red",
    "F_Yellow",
    "E_Red",
    "A_Yellow",
    "A_Red",
    "C_Yellow",
    "B_Red",
    "E_Yellow",
    "C_Red",
    "E_Yellow",
    "G_Red",
    "A_Yellow",
    "A_Red",
    "G_Yellow",
    "C_Red",
    "B_Yellow",
    "E_Red",
    "F_Yellow",
    "G_Red",
    "G_Yellow",
    "B_Red",
    "B_Yellow",
    "B_Red",
  ]),
);
