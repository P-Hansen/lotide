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

function without(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])) {
        newArray.push(source[i]);
      }
  }
  return newArray
}

// TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArray(words, ["hello", "world", "lighthouse"]);