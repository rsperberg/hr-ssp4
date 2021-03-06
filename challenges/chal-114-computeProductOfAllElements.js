// challenge-114-computeProductOfAllElements*

/*
Write a function called “computeProductOfAllElements”.

Given an array of numbers, “computeProductOfAllElements” returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
Your Code Should Pass:

describe("computeProductOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeProductOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the product of all elements", function() {
    expect(computeProductOfAllElements([1, 2, 4])).toBe(8);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeProductOfAllElements([])).toBe(0);
  });
});
*/

function computeProductOfAllElements(arr) {
  return (arr.length === 0) ? 0 : arr.reduce( (accum, elem) => accum * elem );
}

// function computeProductOfAllElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr.reduce( (accum, elem) => accum * elem, 1 );
// }
