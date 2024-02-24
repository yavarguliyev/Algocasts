// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
  This function uses two nested loops, iterating over each row and column to build the staircase. The time complexity is O(n^2) because, in the worst case, it needs to iterate through each cell in an n x n grid.

  Big O(n^2) => Complexity
*/

// function steps (n) { 
//   for (let row = 0; row < n; row++) {
//     let stairs = ''

//     for (let column = 0; column < n; column++) { 
//       if (column <= row) {
//         stairs += '#'
//       } else {
//         stairs += ' '
//       }
//     }
    
//     console.log(stairs);
//   }
// }

/*
  This function is a recursive function that builds the staircase one character at a time, using a helper function. It also has a time complexity of O(n^2) because in the worst case, it needs to make n * n recursive calls.

  Big O(n^2) => Complexity
*/

// function steps (n, row = 0, stairs = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === stairs.length) {
//     console.log(stairs);
//     return steps(n, row + 1);
//   }

//   const add = stairs.length <= row ? '#' : ' '
//   steps(n, row, stairs + add)
// }

/*
  In terms of time complexity, both solutions are similar. However, the recursive solution might have a slightly higher overhead due to the function call stack. The space complexity for both is O(n) due to the recursive call stack in the second solution.  
*/


/*
  This solution uses repeat to generate the '#' characters and padEnd to add the necessary spaces. It simplifies the code and can be more efficient than the nested loop approach.

  In this solution, the repeat method creates a string of '#' characters, and padEnd adds the necessary spaces. Both repeat and padEnd have a time complexity of O(k), where 'k' is the length of the resulting string. Since both methods are called within the loop, the overall time complexity is O(n^2).

  Big O(n^2) => Complexity
*/

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     const stairs = '#'.repeat(row + 1).padEnd(n, ' ');
//     console.log(stairs);
//   }
// }

/*
  This solution uses Array.from to create an array and then maps over it to generate each row of steps. The time complexity for each iteration of the map function is O(n) due to the padEnd method, and since there are 'n' iterations, the overall time complexity is O(n^2).

  Big O(n^2) => Complexity
*/

// function steps(n) {
//   Array.from({ length: n }, (_, i) => {
//     const stairs = '#'.repeat(i + 1).padEnd(n, ' ');
//     console.log(stairs);
//   });
// }

/*
  The time complexity of both alternatives is O(n^2) because, in each case, the operations (repeat, padEnd) are linear in the size of the input (the value of 'n'). For each row (iteration of the loop), you perform operations that are proportional to 'n', and since you do this 'n' times, the overall time complexity is O(n^2).

  The space complexity is O(n) for both alternatives. In each iteration, you create a string of length 'n' to represent a row, and you do this 'n' times. So, the space required is proportional to 'n'.
*/

/*
  This solution only uses a single loop and eliminates the need for nested loops or recursion. It calculates the number of spaces and symbols for each row based on a simple pattern, resulting in a time complexity of O(n).

  The breakdown of time complexity is as follows:

  Iterating through each row: O(n)

  Inside the loop, operations like repeat and string concatenation are constant time.

  The overall time complexity is O(n), which is an improvement over the O(n^2) complexity of the previous implementations.

  This optimized solution is more efficient, especially for larger values of 'n', as it avoids unnecessary repetitions and computations.

  Big O(n) => Complexity
*/

function steps (n) {
  for (let row = 0; row < n; row++) {
    const symbols = '#'.repeat(row + 1);
    const spaces = ' '.repeat(n - row - 1);

    console.log(symbols + spaces);
  }
}


module.exports = steps;
