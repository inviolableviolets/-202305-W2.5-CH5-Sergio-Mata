import { getAliveCells } from "./neighbours";

describe("Given a getAliveCells function", () => {
  describe("When it receives a nested array", () => {
    test("Then it should return the sum of all its elements", () => {
      const board: number[][] = [
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ];

      const result = getAliveCells(board);
      const expectedResult = 4;

      expect(result).toBe(expectedResult);
    });
  });
});
