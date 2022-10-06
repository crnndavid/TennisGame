const { describe, test, expect } = require("@jest/globals");

const {
  playPoint,
  replaceScoreByValue,
  isDeuce,
  hasAdvantage,
  hasWinner,
} = require("./tennisGame");

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

describe("Check if score is replaced", () => {
  test("should return Love", () => {
    expect(replaceScoreByValue(0)).toBe("Love");
  });
  test("should return 15", () => {
    expect(replaceScoreByValue(1)).toBe("15");
  });
  test("should return 40", () => {
    expect(replaceScoreByValue(3)).toBe("40");
  });
});

describe("Check equality", () => {
  test("should be Deuce ", () => {
    let score1 = 3;
    let score2 = 3;
    expect(isDeuce(score1, score2)).toBeTruthy();
  });
  test("should not be Deuce ", () => {
    let score1 = 4;
    let score2 = 1;
    expect(isDeuce(score1, score2)).toBeFalsy();
  });
});

describe("Check if a player has advantage", () => {
  test("should be advantage for player 1", () => {
    let score1 = 4;
    let score2 = 3;
    expect(hasAdvantage(score1, score2)).toBeTruthy();
  });
  test("should be advantage for player 2", () => {
    let score1 = 4;
    let score2 = 5;
    expect(hasAdvantage(score1, score2)).toBeTruthy();
  });
  test("should not be advantage for any player ", () => {
    let score1 = 2;
    let score2 = 2;
    expect(hasAdvantage(score1, score2)).toBeFalsy();
  });
});

describe("Check if a player has won", () => {
  test("should be player 1  ", () => {
    const score1 = 4;
    const score2 = 1;
    expect(hasWinner(score1, score2)).toBeTruthy();
  });
  test("should be player 1  ", () => {
    const score1 = 6;
    const score2 = 4;
    expect(hasWinner(score1, score2)).toBeTruthy();
  });
  test("should be player 1  ", () => {
    const score1 = 2;
    const score2 = 1;
    expect(hasWinner(score1, score2)).toBeFalsy();
  });
});
