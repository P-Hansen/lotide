// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let tally = {};
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      tally[key] = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (key === allItems[i]) {
          tally[key] = tally[key] + 1;
        }
      }
    }
  }
  //console.log(tally)
  return tally
}

module.exports = countOnly;

//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 0);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);