// challenge-042-addToBack

/*
Write a function called “addToBack”.

Given an array and an element, “addToBack” returns the given array with the given element added to the end.

Note: It should be the SAME array, not a new array.

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

Your Code Should Pass:

describe("addToBack", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToBack([1, 2], 3))).toBe(true);
  });

  it("should add an element to the end of an array", function() {
    expect(addToBack([1, 2], 3)).toEqual([1, 2, 3]);
  });

  it("should add an element to the end of an empty array", function() {
    expect(addToBack([], 3)).toEqual([3]);
  });

  it("should be the same array instance that was passed in", function() {
    var input = [1, 2, 3];
    expect(addToBack(input, 4)).toBe(input);
  });
});
*/

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

// Andy Qi
function addToBack(arr, element) {
  arr.splice (arr.length, 0, element);
  return (arr);
}

// Benji Richards
function addToBack(arr, element) {
  arr[arr.length] = element;
  return(arr);
}

// Dino Firmalino
const addToBack = (arr, element) => {
  arr.push(element);
  return arr;
};
