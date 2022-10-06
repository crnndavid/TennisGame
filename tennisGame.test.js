const { describe, test, expect } = require("@jest/globals");
const { playPoint } = require("./tennisGame");

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
