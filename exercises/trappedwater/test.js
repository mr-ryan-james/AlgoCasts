const trap = require("./index");

describe("trapped water", () => {
  it("traps some freaking water", () => {
    expect(
      trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1, 0, 0, 0, 3, 2, 3, 0])
    ).toEqual(21);
  });
});
