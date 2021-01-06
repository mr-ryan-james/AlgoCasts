// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// linear runtime
// function fib(n) {
//   const result = [0, 1];
//   for (let index = result.length; index <= n; index++) {
//     result.push(result[index - 1] + result[index - 2]);
//   }

//   return result[n];
// }

//exponential time (look at time taken in tests)
//can be improved with MEMOIZATION (save the result of each fib(arg) call)
function slow_fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

//mine
const memo = {};

function ryan_fib(n) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n < 2) {
    memo[n] = n;
    return n;
  }

  memo[n - 1] = fib(n - 1);
  memo[n - 2] = fib(n - 2);

  return memo[n - 1] + memo[n - 2];
}

//Stephen's
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    cache[args] = fn(...args);
    return cache[args];
  };
}

const fib = memoize(slow_fib);

module.exports = fib;
