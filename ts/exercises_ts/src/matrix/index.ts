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

// Create empty array of arrays called 'results'
// Create a counter variable, starting at 1
// As long as (start column <= end column) AND (start row <= end row)
//   Loop from start column to end column
//     At results[start_row][i] assign counter variable
//     Increment counter
//   Increment starts now
//   Loop from start row to end now
//     At results[i][end_column] assign counter variable
//     Increment counter
//   Decrement end column
//   ...repeat for other two sides

function matrix(n: number) {}

export default matrix;
