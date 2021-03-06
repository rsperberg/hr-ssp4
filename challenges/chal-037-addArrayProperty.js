// challenge-037-addArrayProperty

/*
Write a function called “addArrayProperty”.

Given an object, a key, and an array, “addArrayProperty” sets a new property on the object at the given key, with its value set to the given array.

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

Your Code Should Pass:

describe("addArrayProperty", function() {
  var testObj;
  var testArray;
  beforeEach(function() {
    testObj = {};
    testArray = [1, 4];
  });
  it("should add a property to the passed in object at the passed in key", function() {
    addArrayProperty(testObj, "testKey", testArray);
    expect(testObj.testKey).toBeDefined();
  });
  it("should set the value at the passed in key on the passed in object to be the passed in array", function() {
    addArrayProperty(testObj, "testKey", testArray);
    expect(testObj.testKey).toEqual(testArray);
  });
});
*/

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
}

// Dino Firmalino
const addArrayProperty = (obj, key, arr) => obj[key] = arr;
