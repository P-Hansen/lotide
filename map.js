// FUNCTION IMPLEMENTATION
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
    return true
  } else {
    console.log(`${actual} !== ${expected}`);
    return false
  }
};

function eqArray(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (!assertEqual(array1[i], array2[i])) {
      console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${array1} !== ${array2}`);
      return false
    }
  }
  console.log(`\u26D4 \u26D4 \u26D4 Assertion Passed: ${array1} === ${array2}`);
  return true
}

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["spiders", "Mars", "space", "countdown", [3, 2, 1]]

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const wordsOG = words;

const results1 = map(words, word => word[0]);
console.log(results1);

eqArray(words, wordsOG); //original array has not changed

const results2 = map(words2, word => word[0]);
console.log(results2);