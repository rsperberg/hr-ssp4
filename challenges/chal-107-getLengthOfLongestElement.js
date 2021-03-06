// challenge-107-getLengthOfLongestElement*

/*
Write a function called “getLengthOfLongestElement”.

Given an array, “getLengthOfLongestElement” returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

Your Code Should Pass:

describe("getLengthOfLongestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfLongestElement(["one", "two", "three"])).toBe("number");
  });
  it("should return the length of the longest element in an array", function() {
    expect(getLengthOfLongestElement(["one", "two", "three"])).toBe(5);
  });
  it("it should handle ties", function() {
    expect(getLengthOfLongestElement(["one", "two", "no"])).toBe(3);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfLongestElement([])).toBe(0);
  });
});
*/

function getLengthOfLongestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const lengths = arr.map( elem => elem.length);
  return Math.max(...lengths);
}
