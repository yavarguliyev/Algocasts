// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
  Big O(n) => Complexity
*/

// function fib (n) {
//   const results = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = results[i - 1];
//     const b = results[i - 2];

//     results.push(a + b);
//   }

//   return results[n];
// }

/*
  Big O(n ^ 2) => Complexity
*/

// function fib (n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

/*
  Big O(n) => Complexity
*/

// function memoize (fn) {
//   const cache = {};

//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const results = fn.apply(this, args);
//     cache[args] = results;
//     return results;
//   }
// }

// function slowFib (n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib)

/*
  As for time complexity:

  1. The iterative solution has a time complexity of O(n) because it iterates through the numbers once, calculating each Fibonacci value in constant time.
  2. The simple recursive solution has an exponential time complexity of O(2^n) because it recalculates the same Fibonacci values multiple times.
  3. The memoized recursive solution has a time complexity of O(n) on average because it avoids redundant calculations through memoization.
  4. There are more optimized algorithms for calculating Fibonacci numbers, such as matrix exponentiation, which can achieve O(log n) time complexity. However, implementing these algorithms might be more complex and less intuitive than the provided solutions. The best solution depends on the specific requirements of your use case and the size of the input values you need to handle.
*/

/*
  This matrix exponentiation approach is more efficient for large values of n compared to the recursive or iterative solutions. However, keep in mind that the matrix exponentiation approach involves more complex mathematics, and the improvement in performance may only be noticeable for very large values of n.s

  Big O(log n) => Complexity
*/

function matrixMultiply (a, b) {
  const result = [
    [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
    [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]],
  ];
  return result;
}

function matrixPower (matrix, n) {
  if (n === 1) {
    return matrix;
  }

  if (n % 2 === 0) {
    const halfPower = matrixPower(matrix, n / 2);
    return matrixMultiply(halfPower, halfPower);
  } else {
    const halfPower = matrixPower(matrix, (n - 1) / 2);
    return matrixMultiply(matrixMultiply(halfPower, halfPower), matrix);
  }
}

function fib (n) {
  if (n <= 1) {
    return n;
  }

  const baseMatrix = [[1, 1], [1, 0]];
  const resultMatrix = matrixPower(baseMatrix, n - 1);

  return resultMatrix[0][0];
}


module.exports = fib;
