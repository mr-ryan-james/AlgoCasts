// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Mine
function fizzBuzz_mine(n) {
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("fizzbuzz");
    }
    if (index % 3 !== 0 && index % 5 !== 0) {
      console.log(index);
    } else if (index % 3 === 0) {
      debugger;
      console.log("fizz");
    } else if (index % 5 === 0) {
      debugger;
      console.log("buzz");
    }
  }
}

//Stephen's
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
