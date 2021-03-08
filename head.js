const assertEqual = require('./assertEqual');

function head(array) {
  return array[0];
}

module.exports = head;

// TEST CODE
/*assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head([]), );*/