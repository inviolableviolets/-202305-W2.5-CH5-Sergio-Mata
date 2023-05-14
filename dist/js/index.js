import { createBoard, printBoard } from "./board.js";
import { getNextGenerationBoard, getAliveCells } from "./neighbours.js";
const playGameOfLife = (rows, columns) => {
    let generation = 0;
    const board = createBoard(rows, columns);
    console.log(printBoard(board));
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
playGameOfLife(20, 60);
