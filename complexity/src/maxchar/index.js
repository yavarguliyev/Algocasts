// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
  Big O(n) => Complexity
*/

// function maxChar (str) {
//   const charMap = {};
//   let maxChar = '';
//   let max = 0;

//   for (const char of str) {
//     charMap[char] = charMap[char] + 1 || 1
//   }

//   for (const char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char]
//       maxChar = char
//     }
//   }

//   return maxChar
// }

/*
  Big O(n) => Complexity
*/

function maxChar (str) {
  const charMap = {};
  let maxChar = '';

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1

    if (maxChar === '' || charMap[char] > charMap[maxChar]) {
      maxChar = char
    }
  }

  return maxChar
}

/*
  Both functions have the same time complexity of O(n), where n is the length of the input string str. This is because both functions iterate through the input string once to build a character frequency map (charMap), and then iterate through the character map to find the character with the maximum frequency.

  In terms of performance, the second function is a slightly better choice because it avoids unnecessary comparisons in the second loop. It updates the maxChar only when it encounters a character with a higher frequency, which reduces the number of assignments.

  So, between the two functions, the second one is more efficient. However, both functions are already quite efficient with a linear time complexity of O(n), and it might be challenging to significantly improve the performance for this specific problem.
*/

module.exports = maxChar;
