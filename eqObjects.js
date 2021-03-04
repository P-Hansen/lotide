// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
    return true
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
    return false
  }
};

function eqArray(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${array1} !== ${array2}`);
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (!assertEqual(array1[i], array2[i])) {
      console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${array1} !== ${array2}`);
      return false
    }
  }
  console.log(`\u26D4 \u26D4 \u26D4 Assertion Passed: ${array1} === ${array2}`);
  return true
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  for (const key1 in object1) {
    if ((Array.isArray(object1[key1]) === true) && (Array.isArray(object2[key1]) === true)) {
      if (eqArray(object1[key1], object2[key1]) !== true) {
        return false
      }
    }
    else {
      if (object1[key1] !== object2[key1]) {
        console.log("false");
        return false
      }
    }
  }
  //there is probably a better way to do this but this compairs object2's keys (in case it has more)
  for (const key2 in object2) {
    if ((Array.isArray(object1[key2]) === true) && (Array.isArray(object2[key2]) === true)) {
      if (eqArray(object1[key2], object2[key2]) !== true) {
        return false
      }
    }
    else {
      if (object1[key2] !== object2[key2]) {
        console.log("false");
        return false
      }
    }
  }
  console.log("true");
  return true
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false