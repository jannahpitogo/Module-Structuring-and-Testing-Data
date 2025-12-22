const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3, 0)).toEqual(true);
  expect(isProperFraction(5, 2, 0)).toEqual(false);
  expect(isProperFraction(-4, 7, 0)).toEqual(true);
  expect(isProperFraction(3, 3, 0)).toEqual(false);
  expect(isProperFraction(3, 6, 3)).toEqual(false);
  expect(isProperFraction(3, 7)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

// Case 3: Identify Negative Fractions:

// Case 4: Identify Equal Numerator and Denominator:
