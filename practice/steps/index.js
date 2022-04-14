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

// If (row === n) then we have hit the end of our problem
// If the 'stair' string has a length === n then we are at the end of a row
// If the length of the stair string is less than or equal to the row number we're working on, we add a '#',
//    Otherwise add a space

// Figure out the bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? if not, return
// Do some work. call your function again, making sure the arguments have changed in some fashion
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }

  // steps(n, row, stair);

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

// From 0 to n (iterate through rows)
//  Create an empty string, 'stair'
//  From 0 to n (iterate through columns)
//   If the current column is equal to or less than the current row
//     Add a '#' to 'stair'
//   Else
//     Add a space to 'stair'
//  Console.log 'stair'
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }