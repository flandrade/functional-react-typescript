import { increment, reset } from "../../src/helpers/update";

describe("Helpers.Increment", () => {
  test("updates the state when resetText is empty", () => {
    expect(increment({
      resetText: "", score: 1
    })).toEqual({
      resetText: "", score: 2
    });
  });

  test("updates the state when resetText is not empty", () => {
    expect(increment({
      resetText: "something", score: 100
    })).toEqual({
      resetText: "", score: 101
    });
  });
});

describe("Helpers.Reset", () => {
  test("resets the state when resetText is empty", () => {
    expect(reset(
      { resetText: "", score: 1 },
      { value: 400 }
    )).toEqual({
      resetText: "Previous value was 1", score: 400
    });
  });

  test("resets the state when resetText is empty", () => {
    expect(reset(
      { resetText: "Previous value was something", score: 1 },
      { value: 400 }
    )).toEqual({
      resetText: "Previous value was 1", score: 400
    });
  });
});
