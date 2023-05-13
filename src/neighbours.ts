import { createBoard } from "./board.js";

const board = createBoard(10, 20);

export const checkNeighbourPossiblePositions = (column = 0, row = 0) => {
  const possiblePositions = [
    [column - 1, row - 1],
    [column - 1, row],
    [column - 1, row + 1],
    [column, row - 1],
    [column, row + 1],
    [column + 1, row - 1],
    [column + 1, row],
    [column + 1, row + 1],
  ];

  return possiblePositions;
};
