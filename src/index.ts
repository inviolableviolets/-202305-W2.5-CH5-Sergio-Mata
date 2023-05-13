import { createBoard, printBoard } from "./board.js";
let generation = 0;

setInterval(() => {
  const board = createBoard(10, 20);
  console.log(printBoard(board));
  generation++;
  console.log(`Generation: ${generation}`);
}, 300);
