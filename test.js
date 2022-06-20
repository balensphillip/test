// access the multiply function in the multiply.js file
// access other functions in chai

const { multiply } = require("./multiply.js");
const { assert } = require("chai");

describe("multiplication test", () => {
  it("mutiplies 1 & 1 to equal 1", () => {
    assert.equal(multiply(1, 1), 1);
  });
  it("mutiplies 2 & 2 to equal 4", () => {
    assert.equal(multiply(2, 2), 4);
  });
  it("multiplies 3 & 3 to equal 4", () => {
    assert.equal(multiply(3, 3), 9);
  });
  it("multiplies 4 & 4 to equal 16", () => {
    assert.equal(multiply(4, 4), 16);
  });
  it("multiplies 23 & 45 to equal 1035", () => {
    assert.equal(multiply(23, 45), 1035);
  });
});
