// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u2705 \u2705 \u2705 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("\u26D4 \u26D4 \u26D4 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("identical", "identical");
assertEqual("non identical", "not identical");
assertEqual(10, 10);
assertEqual(1, 2);