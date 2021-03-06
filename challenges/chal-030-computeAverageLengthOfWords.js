// challenge-030-computeAverageLengthOfWords

/*
Write a function called “computeAverageLengthOfWords”.

Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

Your Code Should Pass:

describe("computeAverageLengthOfWords", function() {
  it("should return a number", function() {
    expect(typeof computeAverageLengthOfWords("these", "words")).toBe("number");
  });
  it("should return the average length of the two words", function() {
    expect(computeAverageLengthOfWords("is", "this")).toBe(3);
  });
});
*/

function computeAverageLengthOfWords(word1, word2) {
  let averageWordLength = (word1.length + word2.length) / 2;
  return averageWordLength;
}
