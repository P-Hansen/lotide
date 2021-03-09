let flatArray = [];

function flatten(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      flatten(array[i]);
    }
    else {
      flatArray.push(array[i]);
    }
  }
}

module.exports = flatten;

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
console.log(flatArray);