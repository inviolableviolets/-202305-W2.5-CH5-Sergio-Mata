export const randomBoard = (rows: number, columns: number) => {
  const board: number[][] = [];
  for (let i = 0; i < rows; i += 1) {
    board[i] = [];
    for (let j = 0; j < columns; j += 1) {
      board[i][j] = Math.round(Math.random());
    }
  }

  return board;
};

export const printBoard = (board: number[][]) => {
  console.clear();
  let printedBoard = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        printedBoard += "💀";
      }

      if (board[i][j] === 0) {
        printedBoard += "🥸";
      }
    }

    printedBoard += "\n";
  }

  return console.log(printedBoard);
};
