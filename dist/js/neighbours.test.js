import { getAliveCells, getCellNeighbours, getNextGenerationBoard, } from "./neighbours";
describe("Given a getAliveCells function", () => {
    describe("When it receives a nested array like [[0, 0, 1],[1, 1, 0], [1, 0, 0]]", () => {
        test("Then it should return the sum of all its elements", () => {
            const board = [
                [0, 0, 1],
                [1, 1, 0],
                [1, 0, 0],
            ];
            const result = getAliveCells(board);
            const expectedResult = 4;
            expect(result).toBe(expectedResult);
        });
    });
});
describe("Given a getCellNeighbours function", () => {
    describe("When it receives a nested array like [[0, 1, 0],[1, 0, 1], [0, 1, 0]]", () => {
        test("Then it should count and return [ [ 2, 2, 2 ], [ 2, 4, 2 ], [ 2, 2, 2 ] ]", () => {
            const board = [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ];
            const result = getCellNeighbours(board);
            const expectedResult = [
                [2, 2, 2],
                [2, 4, 2],
                [2, 2, 2],
            ];
            expect(result).toStrictEqual(expectedResult);
        });
    });
});
describe("Given a getNextGenerationBoard function", () => {
    describe("When it receives a nested array like [[1, 1, 0], [0, 1, 1], [0, 0, 1]];", () => {
        test("Then it should apply the rules of the game of live to each element and return [[1, 1, 1], [1, 0, 1], [0, 1, 1]]", () => {
            const board = [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 1],
            ];
            const result = getNextGenerationBoard(board);
            const expectedResult = [
                [1, 1, 1],
                [1, 0, 1],
                [0, 1, 1],
            ];
            expect(result).toStrictEqual(expectedResult);
        });
    });
});
