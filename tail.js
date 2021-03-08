const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return array[array.length - 1];
  }
};

module.exports = tail;