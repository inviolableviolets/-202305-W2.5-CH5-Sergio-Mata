export const createBoard = (rows, columns) => {
    const randomizedBoard = [];
    for (let i = 0; i < rows; i += 1) {
        randomizedBoard[i] = [];
        for (let j = 0; j < columns; j += 1) {
            randomizedBoard[i][j] = Math.round(Math.random());
        }
    }
    return randomizedBoard;
};
export const printBoard = (board) => {
    let printedBoard = "";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                printedBoard += "⬜";
            }
            if (board[i][j] === 0) {
                printedBoard += "⬛";
            }
        }
        printedBoard += "\n";
    }
    return printedBoard;
};
