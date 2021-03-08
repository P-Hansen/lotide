const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs", "More", "words", "here"];

for (let i = 1; i < words.length; i++) {
  console.log(words[i]);
}
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 6); // original array should still have 3 elements!