// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
  The given function generates a matrix in a spiral order, and it appears to have a time complexity of O(n^2), where 'n' is the input parameter representing the size of the matrix (assuming operations within each loop take constant time).

  The loop iterates through each element in the matrix exactly once, filling it with the appropriate value. The outer loop runs for O(n) iterations, and within each iteration, the inner loops also run for O(n) steps. Hence, the overall time complexity is O(n^2).

  Regarding whether there is a better solution, the presented algorithm is already quite efficient for generating a spiral matrix. However, alternative solutions may exist, and their efficiency could depend on specific requirements or constraints. This algorithm is reasonable for general purposes, and unless there are specific constraints or performance requirements that need to be addressed, this implementation should work well.

  Big O(n ^ 2) => Complexity
*/

// function matrix (n) {
//   const results = [];

//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;

//   let startColumn = 0;
//   let endColumn = n - 1;

//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     // Top Row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++
//     }
//     startRow++;

//     // Right Column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
  
//     // Bottom Row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
  
//     // Left Column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }

//   return results;
// }

/*
  This implementation directly manipulates the indices to fill the matrix in a spiral order without separate loops for each side. It has a similar time complexity of O(n^2) but might be considered more concise. Choose the one that fits your coding style and requirements better.

  Big O(n ^ 2) => Complexity
*/

function matrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let counter = 1;
  let startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Top Row
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    // Bottom Row
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow--;

    // Left Column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter++;
    }
    startCol++;
  }

  return matrix;
}


module.exports = matrix;
