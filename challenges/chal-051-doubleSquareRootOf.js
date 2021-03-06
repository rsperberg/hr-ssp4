// challenge-051-doubleSquareRootOf

/*
Write a function called “doubleSquareRootOf”.
Given a number, “doubleSquareRootOf” returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22

Your Code Should Pass:

describe("doubleSquareRootOf", function() {
  it("should return a number", function() {
    expect(typeof doubleSquareRootOf(9)).toBe("number");
  });
  it("should return the doubled square root of the passed in number", function() {
    expect(doubleSquareRootOf(9)).toBe(6);
  });
})
*/

function doubleSquareRootOf(num) {
  return Math.sqrt(num) * 2;
}

// Dino Firmalino
const doubleSquareRootOf = (num) => Math.sqrt(num) * 2;

// Edward Kim
function doubleSquareRootOf(num) {
  return 2 * num ** 0.5;
}

// Kanak Lata
function doubleSquareRootOf(num) {
 return 2*(Math.pow(num,0.5));
}
