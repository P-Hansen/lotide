const assertEqual = require('./assertEqual');

const tail = function(array) {
  if ((array.length === 0) || (array.length === 1)) {
    return [];
  } else {
    return array.slice(1, array.length);
  }
};

module.exports = tail;

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs", "More", "words", "here"];
for (let i = 1; i < words.length; i++) {
  console.log(words[i]);
}
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 6); // original array should still have 3 elements!