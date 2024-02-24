// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/*
  Big O(n^2) => Complexity
*/

// function pyramid (n) { 
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = ''
    
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level)
//   }
// }

/*
  Big O(n^2) => Complexity
*/

// function pyramid (n, row = 0, level = '') {
//   if (n === row) {
//     return;
//   }

//   if (2 * n - 1 === level.length) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   const add = midpoint - row <= level.length && midpoint + row >= level.length ? '#' : ' ';

//   pyramid(n, row, level + add)
// }

/*
  This solution only uses a single loop and eliminates the need for nested loops or recursion. It calculates the number of spaces and symbols for each row based on a simple pattern, resulting in a time complexity of O(n).

  The breakdown of time complexity is as follows:

  Iterating through each row: O(n)

  Inside the loop, operations like repeat and string concatenation are constant time.

  The overall time complexity is O(n), which is an improvement over the O(n^2) complexity of the previous implementations.

  This optimized solution is more efficient, especially for larger values of 'n', as it avoids unnecessary repetitions and computations.

  Big O(n) => Complexity
*/

function pyramid (n) {
  for (let row = 0; row < n; row++) {
    const numSpaces = n - row - 1;
    const numSymbols = 2 * row + 1;

    const spaces = ' '.repeat(numSpaces);
    const symbols = '#'.repeat(numSymbols);

    console.log(spaces + symbols + spaces);
  }
}


module.exports = pyramid;
