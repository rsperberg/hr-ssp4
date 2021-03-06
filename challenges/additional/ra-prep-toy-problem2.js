/*
Part 1: Write a function which performs a set sequence of operations to an indefinite number
of input integers.
The sequence: add, subtract, multiply, divide
(Source: codewars.com)
*/
// input: indefinitely long sequence of numbers
// output: a number
// constraints: operations follow the specific sequence of add, subtract, multiply and divide, repeatedly
// edge cases: zero might occur when the operation is divide
// assumptions: Treat seed as zero so will start by adding first number to zero, subtract second number, etc. If divide by zero, return infinity

function addSubtractMultiplyDivideRepeat(...args) {
  let accum = 0;
  for (let i = 0; i < args.length; i++) {
    if (i % 4 === 0) {
      accum += args[i];
    } else if (i % 4 === 1) {
      accum -= args[i];
    } else if (i % 4 === 2) {
      accum *= args[i];
    } else if (i % 4 === 3 && args[i] === 0) {
      if (accum < 0) {
        accum = Number.NEGATIVE_INFINITY
        return accum;
      } else {
        accum = Number.POSITIVE_INFINITY
        return accum;
      }
    } else if (i % 4 === 3) {
      accum /= args[i];
    }
  }
  return accum;
}

// solution from either Rajas or Cy

var seqOps = function () {
  var output = 0;
  var args = [].slice.call(arguments);
  for ( i = 0; i < args.length; i += 4 ) {
    if ( i < args.length ) {
      output += args[i];
    }
    if ( i + 1 < args.length ) {
      output -= args[i + 1];
    }
    if ( i + 2 < args.legnth ) {
      output += args[i + 2];
    }
    if ( i + 4  < args.length ) {
      output = output / args[i + 3];
    }
  }
  return output;
}
