// challenge-036-isPersonOldEnoughToDrink

/*
Write a function called “isPersonOldEnoughToDrink”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrink” returns whether the given person is old enough to drink.

Notes:
* The legal drinking age in the United States is 21.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false

Your Code Should Pass:

describe("isPersonOldEnoughToDrink", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrink(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 21", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(true);
  });
  it("should return true if a person has an age of 21", function() {
    var person = {
      age: 21
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(true);
  });
  it("should return false if a person has an age under 21", function() {
    var person = {
      age: 20
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(false);
  });
});
*/

function isPersonOldEnoughToDrink(person) {
    if (person === undefined) {
    return false;
  }
  return person.age >= 21;
}

// Amanda Loftus
function isPersonOldEnoughToDrink(person) {
  return person.age >= 21;
}

// Benjamin Polansky
function isPersonOldEnoughToDrink(person) {
  return person['age'] >= 21;
}

// Dino Firmalino
const isPersonOldEnoughToDrink = (obj) => obj.age >= 21;
