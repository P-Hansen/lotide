const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 4 for [1, 2, 3, 4]", () => {
    assert.strictEqual(tail([1, 2, 3, 4]), 4);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5');
  });

  it("returns [] for []", () => {
    assert.strictEqual(tail([]).length, [].length);
  });

  it("returns 'here' for ['Yo Yo', 'Lighthouse', 'Labs', 'More', 'words', 'here']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs", "More", "words", "here"];
    assert.strictEqual(tail(words), "here");
  });

  it("keeps the original array intact, ['Yo Yo', 'Lighthouse', 'Labs', 'More', 'words', 'here'].length remains unchanged", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs", "More", "words", "here"];
    const lengthOfWordsBefore = words.length;
    tail(words);
    assert.strictEqual(words.length, lengthOfWordsBefore);
  });

});