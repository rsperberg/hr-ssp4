// challenge-048-computeAreaOfACircle

/*
Write a function called “computeAreaOfACircle”.

Given the radius of a circle, “computeAreaOfACircle” returns its area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

Your Code Should Pass:

describe("computeAreaOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfACircle(4)).toBe("number");
  });
  it("should return the area of a circle", function() {
    expect(computeAreaOfACircle(4)).toBe(50.26548245743669);
  });
});
*/

function computeAreaOfACircle(radius) {
  return Math.PI * radius * radius;
}

// Amanda Loftus
function computeAreaOfACircle(radius) {
  return Math.PI * (radius ** 2);
}

// Ana Stijovic
function computeAreaOfACircle(radius) {
  return Math.PI * Math.pow(radius , 2);
}

// Dino Firmalino
const computeAreaOfACircle = (radius) => radius * radius * Math.PI;
