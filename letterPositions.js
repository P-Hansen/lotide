const letterPositions = function (string) {
  let tally = {};
  for (let i = 0; i < string.length; i++) {
    if ((tally[string[i]] === undefined) &&  (string[i] !== ' ')){
      tally[string[i]] = [i];
    }
    else if (string[i] !== ' ') {
      tally[string[i]].push(i);
    }
  }
  return tally
}

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));