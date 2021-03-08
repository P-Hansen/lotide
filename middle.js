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

module.exports = middle;

/*//Test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

let testArray1 = [1, 2, 3]; //odd size
//console.log(middle(testArray1)); // => [2]
assertEqual(2, middle(testArray1));

let testArray2 = [1, 2, 3, 4]; //even size
//console.log(middle(testArray2)); // => [2, 3]
eqArray(testArray2.slice(1,3), middle(testArray2));*/