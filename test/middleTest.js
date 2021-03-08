const assertEqual = require("../assertEqual");
const middle = require("../middle");
const eqArray = require("../eqArrays");

//Test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

let testArray1 = [1, 2, 3]; //odd size
//console.log(middle(testArray1)); // => [2]
assertEqual(2, middle(testArray1));

let testArray2 = [1, 2, 3, 4]; //even size
//console.log(middle(testArray2)); // => [2, 3]
eqArray(testArray2.slice(1,3), middle(testArray2));