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

//The function will return a "slice of the array with elements 
//taken from the beginning." It should keep going until 
//the callback / predicate returns a truthy value.
const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
eqArray([1, 2, 5, 7, 2], results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
eqArray(["I've", "been", "to", "Hollywood"], results2);