const threeSum = require("./index");

describe("three sum", () => {
  it("should return array", () => {
    const array = [-1, 0, 1, 2, -1, -4];
    const results = threeSum(array);

    console.log("results", results);
  });
});
