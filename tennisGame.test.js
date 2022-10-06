const { describe, test, expect } = require("@jest/globals");
const { playPoint, addPointToScore } = require("./tennisGame");

describe("Check if Play Point return  0 or 1", () => {
  test("should return 0 or 1 ", () => {
    const min = 0;
    const max = 1;
    expect(playPoint()).toBeGreaterThanOrEqual(min);
    expect(playPoint()).toBeLessThanOrEqual(max);
  });
  test("Should return only one number - 1 or 0", () => {
    const value = playPoint().toString();
    expect(value.length).toEqual(1);
  });
});

describe("Check if point is attributed to score", () => {
  test("should add 1 to score player 1 ", () => {
    let scorePlayerOne = 0;

    expect(addPointToScore(0)).toBe(scorePlayerOne++);
  });
  test("should add 1 to score player 2", () => {
    let scorePlayerTwo = 0;
    expect(addPointToScore(1)).toBe(scorePlayerTwo++);
  });
});
