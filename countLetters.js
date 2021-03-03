// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let tally = {};
  for (let i = 0; i < string.length; i++) {
    if (tally[string[i]] === undefined) {
      tally[string[i]] = 1;
    }
    else {
      tally[string[i]] = tally[string[i]] + 1;
    }
  }
  return tally
}

console.log(countLetters("lighthouse in the house"));