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

// TEST CODE
eqArray([1, 2, 3], [1, 2, 3]) // => true
eqArray([1, 2, 3], [3, 2, 1]) // => false
eqArray(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArray(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => should PASS

/*assertEqual(1, 1);
assertEqual("identical", "identical");
assertEqual("non identical", "not identical");
assertEqual(10, 10);
assertEqual(1, 2);
*/