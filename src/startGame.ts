import { createBoard, printBoard } from "./board.js";
import { getNextGenerationBoard, getAliveCells } from "./neighbours.js";

export const playGameOfLife = (rows: number, columns: number) => {
  let generation = 0;

  const board = createBoard(rows, columns);
  console.log(printBoard(board));
  console.log("GAME OF LIFE");

  const startGame = () => {
    setInterval(() => {
      console.clear();
      const nextGeneration = getNextGenerationBoard(board);
      let aliveCells = getAliveCells(nextGeneration);
      console.log(printBoard(nextGeneration));
      generation++;
      console.log(`Generation: ${generation}`);
      console.log(`Alive cells: ${aliveCells}`);
    }, 200);
  };

  setTimeout(startGame, 3000);
};
