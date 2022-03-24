//#region description

/*
  --- Directions
  Print out the n-th entry in the fibonacci series.
  The fibonacci series is an ordering of numbers where
  each number is the sum of the preceeding two.
  For example, the sequence
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  forms the first ten entries of the fibonacci series.
  Example:
  fib(4) === 3
 */

//#endregion

//#region solutions

// @desc: solution one
// @desc: iterative solution
// @desc: linear runtime

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   // return result[result.length - 1];
//   return result[n];
// }

// @desc: solution two
// @desc: recrusive solution
// @desc: slow fib

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// @desc: solution three
// @desc: memoize solution

// @desc: Function.prototype.apply()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply]

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// const fib = memoize(slowFib);

/*
  the reason why we name the function names the same 
  for speed up the process and 
  avoid using the slow version of the function 
*/

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

fib = memoize(fib);

//#endregion

module.exports = fib;
