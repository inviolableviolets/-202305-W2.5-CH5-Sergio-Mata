import { createBoard } from "./board.js";
const getCellNeighbours = (board) => {
    let neighboursUpdatedBoard = [];
    for (let row = 0; row < board.length; row++) {
        let neighboursUpdatedRow = [];
        for (let column = 0; column < board[row].length; column++) {
            let neighboursCount = 0;
            if (board[row - 1] && board[row - 1][column - 1] === 1) {
                neighboursCount++;
            }
            if (board[row - 1] && board[row - 1][column] === 1) {
                neighboursCount++;
            }
            if (board[row - 1] && board[row - 1][column + 1] === 1) {
                neighboursCount++;
            }
            if (board[row][column - 1] && board[row][column - 1] === 1) {
                neighboursCount++;
            }
            if (board[row][column + 1] && board[row][column + 1] === 1) {
                neighboursCount++;
            }
            if (board[row + 1] && board[row + 1][column - 1] === 1) {
                neighboursCount++;
            }
            if (board[row + 1] && board[row + 1][column] === 1) {
                neighboursCount++;
            }
            if (board[row + 1] && board[row + 1][column + 1] === 1) {
                neighboursCount++;
            }
            neighboursUpdatedRow.push(neighboursCount);
        }
        neighboursUpdatedBoard.push(neighboursUpdatedRow);
    }
    return neighboursUpdatedBoard;
};
const board = createBoard(5, 5);
console.log(board);
console.log(getCellNeighbours(board));
export const getAliveCells = (board) => {
    let aliveCellsCount = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            aliveCellsCount += board[i][j];
        }
    }
    return aliveCellsCount;
};
export const getNextGenerationBoard = (board) => {
    const neighboursBoard = getCellNeighbours(board);
    for (let i = 0; i < neighboursBoard.length; i++) {
        for (let j = 0; j < neighboursBoard[i].length; j++) {
            if (neighboursBoard[i][j] < 2)
                board[i][j] = 0;
            if (neighboursBoard[i][j] > 3)
                board[i][j] = 0;
            if (neighboursBoard[i][j] === 3)
                board[i][j] = 1;
        }
    }
    return board;
};
