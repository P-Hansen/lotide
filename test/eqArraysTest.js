const eqArray = require("../eqArrays");
const assertEqual = require("../assertEqual");

eqArray([1, 2, 3], [1, 2, 3]) // => true
eqArray([1, 2, 3], [3, 2, 1]) // => false
eqArray(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArray(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => should PASS