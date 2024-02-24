// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
  Big O(n) => Complexity
*/

// function capitalize (str) { 
//   const words = [];

//   for (const word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

/*
  It iterates through each character of the input string once, checking for spaces and capitalizing the next character if a space is found.

  Big O(n) => Complexity
*/

// function capitalize (str) {
//   let results = str[0].toUpperCase()

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       results += str[i].toUpperCase();
//     } else {
//       results += str[i];
//     }
//   }

//   return results
// }

/*
  Therefore, the overall time complexity of Option 2 is O(n).

  In terms of time complexity, both options are similar, with a linear time complexity O(n), where n is the length of the input string. However, Option 2 might have a slightly better constant factor because it doesn't involve creating an array of words.

  For practical purposes, the performance difference is likely to be minimal for typical input sizes. The choice between the two options may come down to personal preference, readability, or specific requirements in your project.
*/

/*
  Big O(n) => Complexity
*/

function capitalize(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = capitalize;
