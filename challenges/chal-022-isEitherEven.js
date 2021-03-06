// challenge-022-isEitherEven

/*
Write a function called “isEitherEven”.

Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true

Your Code Should Pass:

describe("isEitherEven", function() {
  it("should return a boolean", function() {
    expect(typeof isEitherEven(40, 3)).toEqual("boolean");
  });
  it("should return true if the first number is even", function() {
    expect(isEitherEven(4, 3)).toBe(true);
  });
  it("should return true if the second number is even", function() {
    expect(isEitherEven(7, 30)).toBe(true);
  });
  it("should return true if the both numbers are even", function() {
    expect(isEitherEven(70, 30)).toBe(true);
  });
  it("should return false if both numbers are odd", function() {
    expect(isEitherEven(71, 31)).toBe(false);
  });
});
*/

function isEitherEven(num1, num2) {
  let num1Even = num1 % 2 === 0;
  let num2Even = num2 % 2 == 0;
  return num1Even || num2Even;
}
