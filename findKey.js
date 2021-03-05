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

//return the first key for which the callback returns a truthy value
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key
    }
  }
}

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(results1, "noma");