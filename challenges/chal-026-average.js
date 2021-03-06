// challenge-026-average

/*
Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5

Your Code Should Pass:

describe("average", function() {
  it("should return a number", function() {
    expect(typeof average(1, 12)).toBe("number");
  });
  it("should return the average of two numbers", function() {
    expect(average(2, 4)).toBe(3);
  });
});
*/

function average(num1, num2) {
  let averageVal = (num1 + num2) / 2;
  return averageVal;
}
