// challenge-062-getAllLetters

/*
Write a function called “getAllLetters”.

Given a word, “getAllLetters” returns an array containing every character in the word.

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

Your Code Should Pass:

describe("getAllLetters", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllLetters("something like this here"))).toBe(true);
  });
  it("should return an array containing all the letters in the word", function() {
    expect(getAllLetters("Eowin")).toEqual(["E", "o", "w", "i", "n"]);
  });
  it("should return an empty array when given an empty string", function() {
    expect(getAllLetters("")).toEqual([]);
  });
});
*/

function getAllLetters(str) {
  let individualChars = [];
  for (let i = 0; i < str.length; i++) {
    individualChars.push(str[i])
  }
  return individualChars;
}

// Amanda Loftus
function getAllLetters(str) {
  return str.split('');
}

// Benjamin Polansky
function getAllLetters(str) {
  return (str.length < 1) ? [] : str.split('');
}

// Yuehan Duan
function getAllLetters(str) {
  return str.length ? str.split('') : [];
}

// Munkei Keton
function getAllLetters(str) {
   // I: word string
   // O: returns an array containing every character in the word
   // E: if given an empty string, it should return an empty array

   return str.split('') || [];
}
