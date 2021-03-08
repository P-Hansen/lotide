const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.strictEqual(middle([1])[0], [][0]);
  });

  it("returns [] for [1, 2]", () => {
    assert.strictEqual(middle([1, 2])[0], [][0]);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3])[0], [2][0]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(middle([1, 2, 3, 4])[0], [2, 3][0]);
    assert.strictEqual(middle([1, 2, 3, 4])[1], [2, 3][1]);
  });

});