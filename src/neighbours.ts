import { createBoard } from "./board.js";

const board = createBoard(10, 20);

export const checkNeighbourPossiblePositions = (
  column = 0,
  row = 0,
  cell: number[][]
) => {
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

const cellExample = [
  [0, 0, 0],
  [1, 1, 1],
  [1, 1, 0],
];

const countNeighbours = (cell: number[][]) => {
  let neighboursCount = 0;

  for (let i = 0; i < cell.length; i++) {
    for (let j = 0; j < cell[i].length; j++) {
      if (cell[i][j] === 1) {
        neighboursCount++;
      }
    }
  }
  if (cell[1][1] === 1 && neighboursCount > 0) neighboursCount--;

  return neighboursCount;
};

console.log(countNeighbours(cellExample));
