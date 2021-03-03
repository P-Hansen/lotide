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

const middle = function (array) {
  let aLength = array.length;
  if (aLength <= 2) {
    return []
  }
  else if (aLength % 2 === 0) { //even size
    aLength = aLength / 2;
    return array.slice(aLength - 1, aLength + 1)
  }
  else { //odd size
    return array[((aLength / 2) - 0.5)]
  }
}

//Test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

let testArray1 = [1, 2, 3]; //odd size
//console.log(middle(testArray1)); // => [2]
assertEqual(2, middle(testArray1));

let testArray2 = [1, 2, 3, 4]; //even size
//console.log(middle(testArray2)); // => [2, 3]
eqArray(testArray2.slice(1,3), middle(testArray2));